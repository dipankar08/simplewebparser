let request = require('async-request'), // TODO: move to const request = require("request-promise");
    response;
const cheerio = require('cheerio')
var Url = require('url-parse');
import { Analytics } from "../../analytics";
import { getHostNameFromUrl,saveToDB } from "../utils/helper";
import { BaseWebReader, WEB_TYPE, WordPressWebReader } from "./web_reader";
import { WebEntryPoint } from "./web_entrypoints";
import { validate, Content, DB_URL } from "../CONST";
import { uniqBy } from "lodash";

const cron = require('node-cron');

export class WebCrawler {
    reader_map: Map<WEB_TYPE, BaseWebReader> ;
    constructor(){
        this.reader_map= new Map();
        // add your reader here.
        let mylist = [new WordPressWebReader()]


        for(var l of mylist){
            this.reader_map.set(l.getType(), l);
        }
    }

    async crawl(list:Array<WebEntryPoint>){
        // First Round Just get the list of URLs.
        let result =[];
        let current = list[0];
        for(var l of list){
            // detect a host complete 
            if(getHostNameFromUrl(l.url) != getHostNameFromUrl(current.url)){
                this.processURLList(result, current)
                result = []
                current = l
            }
            try{
              
            } catch(e){
                Analytics.action('rss_link_broken',getHostNameFromUrl(l.url),{"url":l.url})
            }   
        }
        this.processURLList(result, current);
    }


    // send a list of URLs
    async processURLList(urlList: string[], config:WebEntryPoint) {
        /* 
       console.log(`[INFO] Total storyLink found: ${urlList.length}`)
        // remove duplicate :
        urlList = uniqBy(urlList,'url')
        console.log(`[INFO] Total count of Story Link(After remove duplicate): ${urlList.length}`)

        if(urlList.length == 0){
            return null
        }
        // find duplicate in server
        let resp = await request(`${DB_URL}/exist`,{
            method: 'POST',
            data: JSON.stringify({
                _field: 'url',
                _value:urlList
            })
        });
        let obj = JSON.parse(resp.body)
        if(obj.status == 'success'){
            Analytics.action('stat_parse_duplicate','dummy',{'unique_count':urlList.length - obj.out.found_count, 'duplicate_count': obj.out.found_count,'domain':Url(url).hostname})
            urlList =  urlList.filter(x=> obj.out.found_list[x.url] == null)
            console.log(`[INFO] Total link which is NOT in DB: ${urlList.length}, DB Found count: ${obj.out.found_count}`)
           if(urlList.length == 0){
                return;
            }
        } else{
            return;
        }
       // Now fetch the URL which not in DB and insert.
       let result = []
       for( let u of urlList){
           let res = await this.reader_map.get(config.;
           if(res != null){
               result.push(assignIn(res, u.extra))
           }
       }
        await saveToDB(result);
    */
    }
}
