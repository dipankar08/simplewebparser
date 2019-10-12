const cron = require('node-cron');
const request = require("request-promise");

 import {Crawler, Type, ExpandLinkConfig} from './crawler'
import { BaseConfig } from './config/baseconfig';
import { AnandabazarConfig } from './config/anandabazar';
import { ListConfig } from './config/CONST';
import { ZeeNewsConfig } from './config/zeenews_bengali';
import { News18Config } from './config/news18_bengali';
import { OneIndiaBengaliConfig } from './config/oneindia_bengali';
import { BbcBengaliConfig } from './config/bbc_bengali';
import { Kolkata247 } from './config/kolkata247';
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

var configList:Array<BaseConfig> =[
    // BENGALI
    new AnandabazarConfig(),
    new ZeeNewsConfig(),
    new News18Config(),
    new OneIndiaBengaliConfig(),
    new BbcBengaliConfig(),
    new Kolkata247(),
    new PratidinConfig(),
    new AjjKalConfig(),
    new DainikStatesmanConfig(),
    new AajBanglaConfig(),
    new NilkonthoConfig(),
    new IndiaTimesBengaliConfig(),
    // new NDTVBanglaConfig(), Broken

    // ENGLISH
    //new NDTVEnglishConfig(),
    new TheHinduConfig(),

    //HINDI
    //new NDTVHindiConfig(),
    new BusinessInsidersConfig(),
]

async function prod(){  
    try{
        Analytics.action('cron_run_start', `Started at ${Date.now()}`)
            for(let item of configList){
                await item.execute();
            }
        } catch(err){
            Analytics.action("crash","Server has crashed with error")
            Analytics.exception(err);
        }
}

// run in every 30 min
function cronJob(){
    Analytics.launch("crawler");
    cron.schedule('*/30 * * * *', () => {
        console.log(`${Date.now()} Running a task every 15 minutes`);
            prod();
    });
    // run now too.
    prod(); 
}

async function test(){
    var body = {_payload: [{"title1":"রাজ্যবাসীর জন্য সুখবর! বড় অংশ থেকে বর্ষার বিদায়, বাকি অংশে কয়েকদিনের মধ্যেই"}]}; 
    let resp = await request({
        uri:'http://simplestore.dipankar.co.in/api/test/bulk_insert',
        method: 'POST',
        body: body,
        json:true
    });
    console.log(resp)
}


cronJob();
//new OneIndiaBengaliConfig().execute()
