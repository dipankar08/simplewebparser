import {PageParseConfig, Crawler, StringAnyMap, RootConfig} from '../crawler'
import { LANG, ListConfig, STREAM, LIMIT, StoryListConfig } from './CONST';
const fetch_req = require('node-fetch');

export abstract class BaseConfig {
    tag: string;    
    constructor(tag: string) {
        this.tag = tag;
    }

    protected getRootConfig():RootConfig { return {}} ;
    abstract getPageParseConfig():Array<PageParseConfig> ;

    abstract getLang(): LANG

    protected getListConfig(STREAM):ListConfig{
        return null
    }
    abstract  getTestPageUrl(): String
    protected getLimit():number{ return LIMIT; }

    protected getStoryListConfig():Array<StoryListConfig>{
        return []
    }

    async test(){
        console.log(`[${this.tag}] Test started`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        let res = await crawler.parse(this.getTestPageUrl().toString())
        if(res.title.length >10 && res.details.length >10 && res.img.length >10){
            console.log(res.title);
            console.log(res.details)
            console.log(res.img)
            console.log(`[${this.tag}] Test Passed`);
        } else{
            console.log(`[${this.tag}] Test Failed for url: ${this.getTestPageUrl()}`);
            console.log(res);
        }
    }

    async execute(){
        console.log(`[${this.tag}] Execution started`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        await this.save(await crawler.parseStoryList(this.getStoryListConfig()));
    }

    async save(res:Array<StringAnyMap>|null){
        if(res == null){
            return;
        }
        let res1 = res.filter(x => { 
            if(x && x.title && x.details && x.img && x.title.length > 0 && x.details.length > 0 && x.img.length > 0){
                return true;
            } else{
                console.log(`>>>>>>>>>>>> [ERROR] Empty data receiced so NOT saving this, URL: ${x.url} <<<<<<<<<<<<<<<`)
                return false
            }
        })
        const body = { '_payload': res1}; 
        fetch_req('http://simplestore.dipankar.co.in/api/news/bulk_insert', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }
}