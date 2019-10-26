const cron = require('node-cron');
var Url = require('url-parse');

import {rssCronJob} from "./config/rss/entrypoints"
 import {Crawler, Type, ExpandLinkConfig} from './crawler'

 const request = require("request-promise");
import { BaseConfig } from './config/website/baseconfig';
import { AnandabazarConfig } from './config/website/anandabazar';
import { ListConfig, LANG, STREAM, PROFILE_URL } from './config/CONST';
import { ZeeNewsEnglishConfig, ZeeNewsBengaliConfig, ZeeNewsHindiConfig } from './config/website/zeenews';
import { News18BengaliConfig, News18EnglishConfig, News18HindiConfig } from './config/website/news18';
import { OneIndiaBengaliConfig, OneIndiaEnglishConfig, OneIndiaHindiConfig } from './config/website/oneindia';
import { BbcBengaliConfig } from './config/website/bbc_bengali';
import { Kolkata247, KolkataTimes24 } from './config/website/kolkata247';
import { NDTVBanglaConfig } from './config/website/ndtv_bangla';
import { NDTVEnglishConfig } from './config/website/ndtv_english';
import { NDTVHindiConfig } from './config/website/ndtv_hindi';
import { BusinessInsidersConfig } from './config/website/business_insiders';
import { Analytics } from './analytics';
import { PratidinConfig } from './config/website/pratidin';
import { TheHinduConfig } from './config/website/thehindu';
import { AjjKalConfig } from './config/website/ajjkal';
import { DainikStatesmanConfig } from './config/website/dainikstatesman';
import { AajBanglaConfig } from './config/website/ajjbangla';
import { NilkonthoConfig } from './config/website/nilkontho';
import { IndiaTimesBengaliConfig } from './config/website/indiatimes_bengali';
import { BartamanConfig } from './config/website/bartaman';
import { hostname } from 'os';
import { TechCrunchConfig } from './config/website/techcrunch';
import { BanglarPranConfig, DarkariTipsConfig, GNEBanglaConfig, BharatBartaConfig, Totka24X7Config } from './config/website/wordpress';

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
    new BharatBartaConfig(),
    new Totka24X7Config(),
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
                    console.log(`[INFO] Ignored as not active :${item.getRootConfig().title}`);
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
        uri:`${PROFILE_URL}/insertorupdate`,
        method: 'POST',
        body:{
            _payload:payload,
            _field:'hostname'
        },
        json: true
    });
    console.log(resp)

}

//cronJob();
rssCronJob();
//new Totka24X7Config().execute()
