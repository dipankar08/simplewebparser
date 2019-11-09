import {RSS_TYPE,BaseRSSReader, WordPressRssReader, YouTubeRssReader} from "./rss_reader";
import {EntryPoint} from "./entrypoints"
import { Analytics } from "../../analytics";
import { getHostNameFromUrl,saveToDB } from "../utils/db_helper";
import { validate, Content } from "../CONST";
import { ex } from "../utils/dlog";

const cron = require('node-cron');

export class RssCrawler {
    reader_map: Map<RSS_TYPE, BaseRSSReader> ;
    constructor(){
        this.reader_map= new Map();
        // add your reader here.
        let mylist = [new WordPressRssReader(), new YouTubeRssReader()]


        for(var l of mylist){
            this.reader_map.set(l.getType(), l);
        }
    }

    async crawl(list:Array<EntryPoint>){
        let result =[];
        let hostname = getHostNameFromUrl(list[0].url);
        for(var l of list){
            // detect a host complete 
            if(getHostNameFromUrl(l.url) != hostname){
                this.save(result)
                result = []
                hostname = getHostNameFromUrl(l.url)
            }

            try{
                for(var item of await this.reader_map.get(l.type).read(l.url, l.extra)){
                    if(validate(item)){
                        result.push(item);
                    }
                }
            } catch(e){
                ex(e);
                Analytics.action('rss_link_broken',getHostNameFromUrl(l.url),{"url":l.url})
            }   
        }
        this.save(result);
    }
    async save(list: Content[]) {
        // saving item.
        await saveToDB(list);
    }
}
