import {PageParseConfig, Crawler, RootConfig} from '../../crawler'
import {StringAnyMap} from "./../utils/types";
import { LANG, ListConfig, STREAM, LIMIT, StoryListConfig, DB_URL } from '../CONST';
import { Analytics } from '../../analytics';
import { SummeryBuilder, SummaryStrategy } from '../summary/SummaryManager';
import { d } from '../utils/dlog';
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
        d(`[${this.tag}] Test started`);
        let crawler = new Crawler(this.getRootConfig(), this.getPageParseConfig());
        let res = await crawler.parse(this.getTestPageUrl().toString())
        
        d(res.title);
        d(res.details)
        d(res.img)

        if(res.title.length >10 && res.details.length >10 && res.img != undefined && res.img.length >10){
            d(`[${this.tag}] Test Passed`);
        } else{
            d(`[${this.tag}] Test Failed for url: ${this.getTestPageUrl()}`);
        }
    }

    async execute(){
        d(`[${this.tag}] Execution started for ${this.getRootConfig()}`);
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
                d(`>>>>>>>>>>>> [ERROR] Empty data receiced so NOT saving this, URL: ${x.url} <<<<<<<<<<<<<<<`)
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
                case LANG[LANG.IN_BENGALI]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.BENAGLI)
                    break;
                case LANG[LANG.IN_ENGLISH]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.ENGLISH)
                    break;
                case LANG[LANG.IN_HINDI]:
                    x['summary']= sb.buildSummary(x.details, SummaryStrategy.HINDI)
                    break;
            }
            return x;
        })


        const body = { '_payload': res1}; 
        d(`[INFO]: Uisng URL for insert is : ${DB_URL}`)
        let resp = await request({
            uri:`${DB_URL}/bulk_insert`,
            method: 'POST',
            body: body,
            json:true
        });
        
        d(resp);
        if((resp.status =='error')){
            Analytics.action('error_saving_data', resp);
        } else{
            d(`[Debug] Data saved properly in the server: ${resp.msg}`)
        }
    }
}