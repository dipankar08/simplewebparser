
import { Analytics } from "../../analytics";
import { saveToDB, detectUrlNotInDb, getHostNameFromUrl } from "../utils/db_helper";
import { WebEntryPoint } from "./web_entrypoints";
import { validate,buildContent } from "../CONST";
import { uniqBy, String } from "lodash";
import { parseStoreList, parseStory } from "./network";
import { d, ex } from "../utils/dlog";
import _ = require("lodash");

const cron = require('node-cron');

export class WebCrawler {
    // passing test as true will test one link for each categories
    async crawl(list:Array<WebEntryPoint>, isTest:Boolean = false, name:string = null){
        for(var web_entry of list){
            if(name != null){
                if(web_entry.name != name){
                    continue
                }
            }
            if(!web_entry.is_active){
                d(`[INFO] Skipping as the info is not active ${web_entry.name}`)
                continue;
            }
            d("====================== P R O C E S S I N G===========================")
            let stories:Array<any> = null;
            if(web_entry.is_rss_feed){
                stories = await this.processRssFeed(web_entry)
            } else{
                stories = await this.processWebFeed(web_entry);
            }

            // build and validate contents
            stories = stories.map(storyDict=>{
                let cont = buildContent(storyDict);
                if(cont && validate(cont)){
                    return cont;
                } else{
                    if(isTest){
                       // throw Error("Content validation failed")
                    }
                    d(`[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ ${storyDict.url}`)
                    d(cont);
                    Analytics.hit_tracker({'action':"empty_data_found", 'link': storyDict.url});
                }
                return null;
            });
            // remove nulls
            _.remove(stories, x=>x==null)

            // remove duplicates
            _.uniqBy(stories, 'url');

            d(`[INFO] Try saving count: ${stories.length}`)
            if(isTest){
                d(stories[0]);
                if(stories.length == 0){
                    throw Error("Please fix this now.")
                }
                d("TEST PASSED - PLEASE CHECK ABOVE");
                continue;
            }
            if(stories.length > 0){
                await saveToDB(stories);
            }
        }
    }
    // makeing RSS Feed call. 
    async processRssFeed(web_entry:WebEntryPoint,isTest:Boolean = false):Promise<Array<any>>  {
        let storyList = []
        for(var link of web_entry.links){
            let list = await  web_entry.rsstype.read(link.url, {stream:link.stream});
            for(var l of list){
                storyList.push(this.addExtra(l, web_entry));
            }
        }
        d(`[INFO] LINK/ALL ${storyList.length}`)
        // remove duplicates
        _.uniqBy(storyList, 'url');
        d(`[INFO] LINK/AFTER_UNIQUE ${storyList.length}`)

        // find howmnay link should we parse as they are not in db.
        let notinDb =  await detectUrlNotInDb(storyList.map(x=>x.url));
        if(notinDb.length != 0){
            storyList = storyList.filter(x=> notinDb.indexOf(x.url) != -1);
        }
        d(`[INFO] LINK/NOT_IN_DB ${storyList.length}`)

        return storyList;
    }

    // making web call.
    async processWebFeed(web_entry:WebEntryPoint,isTest:Boolean = false):Promise<Array<any>>{
        let config = web_entry.type.getWebConfig();
        // override the config
        if(web_entry.storyParseConfig){
            config.storyParseConfig = web_entry.storyParseConfig;
        }
        if(web_entry.link_selector){
            config.list_selector = web_entry.link_selector;
        }
        let top_urls = [];
        for (var weblink of web_entry.links){
            // override the selector.
            if(weblink.selector){
                config.list_selector = weblink.selector;
            }
            let urls = await parseStoreList(weblink.url, config);
            top_urls = top_urls.concat(urls.map(u=>{
                return {url:u,stream:weblink.stream}
            }))
            if(isTest){
                break;
            }
        }
        if(top_urls.length == 0){
            Analytics.hit_tracker({'action':"empty_root_url", 'link': weblink.url});
            d(`[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ ${weblink.url}`)
            return [];
        }
        // remove dups
        d(`[INFO] Link/Merge Total ${top_urls.length}`)
        top_urls = uniqBy(top_urls,'url')
        d(`[INFO] Link/After Uniques ${top_urls.length}`)

        // find howmnay link should we parse as they are not in db.
        let notinDb =  await detectUrlNotInDb(top_urls.map(x=>x.url));
        if(!isTest){
            top_urls = top_urls.filter(x=> notinDb.indexOf(x.url) != -1);
        }
        d(`[INFO] Link/Not in DB ${top_urls.length}`)

        // Now parse each story page.
        let stories = []
        for(var link of top_urls){
            try{
                let storyDict = await parseStory(link.url, config);
                storyDict['stream'] = link.stream;
                this.addExtra(storyDict, web_entry);
                stories.push(storyDict);
            } catch(e){
                ex(e)
                d(`[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ :${link.url}`)
                Analytics.hit_tracker({'action':"exception_while_fetching", 'link': link.url});
                Analytics.exception(e);
            }
            if(isTest){
                break;
            }
        }
        return stories;
    }

    // adding extra element in each story.
    addExtra(storyDict: import("../utils/types").StringAnyMap, web_entry: WebEntryPoint) {
        // append any extra here.
        storyDict['lang'] = web_entry.lang;
        storyDict['hostname'] = getHostNameFromUrl(storyDict.url)
        storyDict['is_active']= web_entry.is_active?"1":"0"
        storyDict['is_partner'] = web_entry.is_partner
        if(!storyDict.img){
            storyDict.img = web_entry.profile_img;
        }
        return storyDict;
    }
}
