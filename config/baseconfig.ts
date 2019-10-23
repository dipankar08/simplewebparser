import {PageParseConfig, Crawler, StringAnyMap, RootConfig} from '../crawler'
import { LANG, ListConfig, STREAM, LIMIT, StoryListConfig } from './CONST';
import { Analytics } from '../analytics';
import { SummeryBuilder, SummaryStrategy } from './summary/SummaryManager';
const request = require("request-promise");

export abstract class BaseConfig {
    tag: string;    
    constructor(tag: string) {
        this.tag = tag;
    }

    abstract getRootConfig():RootConfig;
    abstract getPageParseConfig():Array<PageParseConfig> ;

    abstract getLang(): LANG

    protected getListConfig(STREAM):ListConfig{
        return null
    }
    abstract  getTestPageUrl(): String
    protected getLimit():number{ return LIMIT; }

    public getStoryListConfig():Array<StoryListConfig>{
        return []
    }

    async test(){
        console.log(`[${this.tag}] Test started`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        let res = await crawler.parse(this.getTestPageUrl().toString())
        
        console.log(res.title);
        console.log(res.details)
        console.log(res.img)

        if(res.title.length >10 && res.details.length >10 && res.img != undefined && res.img.length >10){
            console.log(`[${this.tag}] Test Passed`);
        } else{
            console.log(`[${this.tag}] Test Failed for url: ${this.getTestPageUrl()}`);
        }
    }

    async execute(){
        console.log(`[${this.tag}] Execution started for ${this.getRootConfig()}`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        let newConfig:Array<StoryListConfig> = this.getStoryListConfig().map(x => {
            x.extra ={'lang':LANG[this.getLang()]}
            x.extra['stream'] = STREAM[x.stream];
            x.extra['is_active']= "1"
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
        // building summary as we insert.
        let sb = new SummeryBuilder()
        res1 = res1.map(x=>{
            switch(x.lang){
                case LANG[LANG.BENGALI]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.BENAGLI)
                    break;
                case LANG[LANG.ENGLISH]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.ENGLISH)
                    break;
                case LANG[LANG.HINDI]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.HINDI)
                    break;
            }
            return x;
        })


        const body = { '_payload': res1}; 

        let resp = await request({
            uri:'http://simplestore.dipankar.co.in/api/news/bulk_insert',
            method: 'POST',
            body: body,
            json:true
        });
        
        console.log(resp);
        if((resp.status =='error')){
            Analytics.action('error_saving_data', resp);
        } else{
            console.log(`[Debug] Data saved properly in the server: ${resp.msg}`)
        }
    }
}