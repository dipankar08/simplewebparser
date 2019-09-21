const cron = require('node-cron');

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

var configList:Array<BaseConfig> =[
    // BENGALI
    new AnandabazarConfig(),
    new ZeeNewsConfig(),
    new News18Config(),
    new OneIndiaBengaliConfig(),
    new BbcBengaliConfig(),
    new Kolkata247(),
    // new NDTVBanglaConfig(), Broken

    // ENGLISH
    new NDTVEnglishConfig(),

    //HINDI
    new NDTVHindiConfig(),
    new BusinessInsidersConfig(),
]

async function prod(){  
    Analytics.action('cron_run', `Started at ${Date.now()}`)
    for(let item of configList){
        await item.execute();
    }
}

// run in every 15 min
function cronJob(){
    Analytics.launch("crawler");
    cron.schedule('*/15 * * * *', () => {
        console.log(`${Date.now()} Running a task every 15 minutes`);
        prod();
    });
}

cronJob();
//new NDTVBanglaConfig().execute()
