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

var configList:Array<BaseConfig> =[
    // BENGALI
    new AnandabazarConfig(),
    new ZeeNewsConfig(),
    new News18Config(),
    new OneIndiaBengaliConfig(),
    new BbcBengaliConfig(),
    new Kolkata247()
]

async function prod(){  
    for(let item of configList){
        await item.execute();
    }
}

// run in every 15 min
function cronJob(){
    cron.schedule('*/15 * * * *', () => {
        console.log(`${Date.now()} Running a task every 15 minutes`);
        prod();
    });
}

cronJob();
//new Kolkata247().execute()
