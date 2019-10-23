const cron = require('node-cron');
var Url = require('url-parse');

 import {Crawler, Type, ExpandLinkConfig} from './crawler'
 const request = require("request-promise");
import { BaseConfig } from './config/baseconfig';
import { AnandabazarConfig } from './config/anandabazar';
import { ListConfig, LANG, STREAM } from './config/CONST';
import { ZeeNewsEnglishConfig, ZeeNewsBengaliConfig, ZeeNewsHindiConfig } from './config/zeenews';
import { News18BengaliConfig, News18EnglishConfig, News18HindiConfig } from './config/news18';
import { OneIndiaBengaliConfig, OneIndiaEnglishConfig, OneIndiaHindiConfig } from './config/oneindia';
import { BbcBengaliConfig } from './config/bbc_bengali';
import { Kolkata247, KolkataTimes24 } from './config/kolkata247';
import { NDTVBanglaConfig } from './config/ndtv_bangla';
import { NDTVEnglishConfig } from './config/ndtv_english';
import { NDTVHindiConfig } from './config/ndtv_hindi';
import { BusinessInsidersConfig } from './config/business_insiders';
import { Analytics } from './analytics';
import { PratidinConfig } from './config/pratidin';
import { TheHinduConfig } from './config/thehindu';
import { AjjKalConfig } from './config/ajjkal';
import { DainikStatesmanConfig } from './config/dainikstatesman';
import { AajBanglaConfig } from './config/ajjbangla';
import { NilkonthoConfig } from './config/nilkontho';
import { IndiaTimesBengaliConfig } from './config/indiatimes_bengali';
import { BartamanConfig } from './config/bartaman';
import { hostname } from 'os';
import { TechCrunchConfig } from './config/techcrunch';
import { BanglarPranConfig, DarkariTipsConfig, GNEBanglaConfig } from './config/banglarpran';

var configList:Array<BaseConfig> =[
    // BENGALI
    new KolkataTimes24(),
    new GNEBanglaConfig(),
    new DarkariTipsConfig(),
    new BanglarPranConfig(),
    new AnandabazarConfig(),
    new ZeeNewsBengaliConfig(),
    new News18BengaliConfig(),
    new OneIndiaBengaliConfig(),
    new BbcBengaliConfig(),
    new Kolkata247(),
    new PratidinConfig(),
    new AjjKalConfig(),
    new DainikStatesmanConfig(),
    // new AajBanglaConfig(), <<< COPY WRITE.>>>
    new NilkonthoConfig(),
    new IndiaTimesBengaliConfig(),
    new BartamanConfig(),
    // new NDTVBanglaConfig(), Broken

    // ENGLISH
    //new NDTVEnglishConfig(),
    new TheHinduConfig(),
    new News18EnglishConfig(),
    new OneIndiaEnglishConfig(),
    new ZeeNewsEnglishConfig(),
    new TechCrunchConfig(),

    //HINDI
    //new NDTVHindiConfig(),
    new BusinessInsidersConfig(),
    new News18HindiConfig(),
    new OneIndiaHindiConfig(),
    new ZeeNewsHindiConfig(),
]


async function prod(){  
    try{
        Analytics.action('cron_run_start', `Started at ${Date.now()}`)
            for(let item of configList){
                if(item.getRootConfig().is_active){
                    await item.execute();
                } else{
                    console.log("[INFO] Ignored as not active");
                }
            }
        } catch(err){
            Analytics.action("crash","Server has crashed with error")
            Analytics.exception(err);
        }
}

// run in every 30 min
async function cronJob(){
    Analytics.launch("crawler");
    await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        console.log(`${Date.now()} Running a task every 15 minutes`);
            prod();
    });
    // run now too.
    prod(); 
}

async function updateprofile(){
    var payload =[]
    for(var config of configList){
        
        payload.push(
            {
                "lang":LANG[config.getLang()],
                "hostname":new Url(config.getTestPageUrl()).hostname,
                "img":config.getRootConfig().defaultImg,
                "title":config.getRootConfig().title,
                "streams": Array.from(new Set(config.getStoryListConfig().map(x=>STREAM[x.stream]))),
                "is_active":config.getRootConfig().is_active,
            })
    }

    let resp = await request({
        uri:'http://simplestore.dipankar.co.in/api/news_profile/insertorupdate',
        method: 'POST',
        body:{
            _payload:payload,
            _field:'hostname'
        },
        json: true
    });
    console.log(resp)

}

async function test(){
    let resp = await request({
        uri:'https://bartamanpatrika.com/detailNews.php?cID=13&nID=191793&P=1',
        method: 'GET',
        headers:{
            'Accept-Encoding': 'gzip'
        }
    });
    console.log(resp)
}

//test()
cronJob();
//new KolkataTimes24().execute()
