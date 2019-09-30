import {PageParseConfig, Crawler, StringAnyMap, RootConfig} from '../crawler'
import { LANG, ListConfig, STREAM, LIMIT, StoryListConfig } from './CONST';
import { Analytics } from '../analytics';
let request = require('async-request')

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
        console.log(`[${this.tag}] Execution started for ${this.getRootConfig()}`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        let newConfig:Array<StoryListConfig> = this.getStoryListConfig().map(x => {
            x.extra ={'lang':LANG[this.getLang()]}
            x.extra['stream'] = STREAM[x.stream];
            return x;
        })
        await this.save(await crawler.parseStoryList(newConfig));
    }

    async save(res:Array<StringAnyMap>|null){
        if(res == null){
            return;
        }
        let res1 = res.filter(x => { 
            if(x && x.title && x.details && x.img && x.title.length > 0 && x.details.length > 0 && x.img.length > 0){
                return true;
            } else{
                Analytics.action("error_empty_data",x.url);
                console.log(`>>>>>>>>>>>> [ERROR] Empty data receiced so NOT saving this, URL: ${x.url} <<<<<<<<<<<<<<<`)
                return false
            }
        })
        if(res1.length == 0){
            return;
        }
        const body = { '_payload': res1}; 
        let resp = await request('http://simplestore.dipankar.co.in/api/news/bulk_insert',{
            method: 'POST',
            data: JSON.stringify(body)
        });
        console.log(resp);
        if((JSON.parse(resp.body)).status =='error'){
            Analytics.action('error_saving_data', resp.body);
        } else{
            console.log("[Debug] Data saved properly in the server")
        }
    }
}