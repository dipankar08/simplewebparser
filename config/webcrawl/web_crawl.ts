let request = require('async-request'), // TODO: move to const request = require("request-promise");
    response;
const cheerio = require('cheerio')
var Url = require('url-parse');
import { Analytics } from "../../analytics";
import { saveToDB, detectUrlNotInDb } from "../utils/db_helper";
import { WebEntryPoint } from "./web_entrypoints";
import { validate,buildContent } from "../CONST";
import { uniqBy } from "lodash";
import { parseStoreList, parseStory } from "./network";

const cron = require('node-cron');

export class WebCrawler {
    // passing test as true will test one link for each categories
    async crawl(list:Array<WebEntryPoint>, isTest:Boolean = false){
        for(var web_entry of list){
            if(!web_entry.is_active){
                console.log(`[INFO] Skipping as the info is not active ${web_entry.name}`)
                continue;
            }
            console.log("====================== P R O C E S S I N G===========================")
            let config = web_entry.type.getWebConfig();
            // override the config
            if(web_entry.storyParseConfig){
                config.storyParseConfig = web_entry.storyParseConfig;
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
                console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$")
                continue;
            }
            // remove dups
            console.log(`[INFO] Link/Merge Total ${top_urls.length}`)
            top_urls = uniqBy(top_urls,'url')
            console.log(`[INFO] Link/After Uniques ${top_urls.length}`)

            // find howmnay link should we parse as they are not in db.
            let notinDb =  await detectUrlNotInDb(top_urls.map(x=>x.url));
            if(!isTest){
                top_urls = top_urls.filter(x=> notinDb.indexOf(x.url) != -1);
            }
            console.log(`[INFO] Link/Not in DB ${top_urls.length}`)

            // Now parse each story page.
            let stories = []
            for(var link of top_urls){
                try{
                    let storyDict = await parseStory(link.url, config);

                    // append any extra here.
                    storyDict['lang'] = web_entry.lang;
                    storyDict['stream'] = link.stream;
                    storyDict['is_active']= web_entry.is_active?"1":"0"
                    storyDict['is_partner'] = web_entry.is_partner

                    if(!storyDict.img){
                        storyDict.img = web_entry.profile_img;
                    }

                    // build and validate contents
                    let cont = buildContent(storyDict);
                    if(validate(cont)){
                        stories.push(cont);
                    } else{
                        console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$")
                        console.log(cont);
                        Analytics.hit_tracker({'action':"empty_data_found", 'link': storyDict.url});
                    }
                } catch(e){
                    console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$")
                    Analytics.hit_tracker({'action':"exception_while_fetching", 'link': link.url});
                    Analytics.exception(e);
                }
                if(isTest){
                    break;
                }
            }
            console.log(`[INFO] Try saving count: ${stories.length}`)
            if(isTest){
                console.log(stories);
                if(stories.length == 0){
                    throw Error("Please fix this now.")
                }
                console.log("TEST PASSED - PLEASE CHECK ABOVE");
                continue;
            }
            await saveToDB(stories);
        }
    }
}
