import { WebEntryPoint} from "./web_entrypoints";
import { updateProfileToDb, getHostNameFromUrl } from "../utils/db_helper";
import { LANG, STREAM, TELEMETRY_APP_NAME } from "../CONST";
import _ = require("lodash");
import { WebCrawler } from "./web_crawl";
import { Analytics } from "../../analytics";
import { d } from "../utils/dlog";
const cron = require('node-cron');

async function updateProfile(list:WebEntryPoint[]){
    await updateProfileToDb(list.map(x=>{
        return{
            title:x.name,
            lang:LANG[x.lang],
            hostname:getHostNameFromUrl(x.links[0].url),
            img:x.profile_img,
            streams:_.uniq(x.links.map(y=>STREAM[y.stream])),
            count_followers:0,
            is_active:x.is_active?"1":"0"
        }
    }))
}

let urlList:Array<WebEntryPoint> = []
urlList= urlList.concat(require('./sources/bengali_big').urlList) // OK
urlList= urlList.concat(require('./sources/partner_small').urlList) // OK
urlList= urlList.concat(require('./sources/bengali_small').urlList) // 
urlList= urlList.concat(require('./sources/english_big').urlList) // OK
urlList= urlList.concat(require('./sources/other_lang').urlList) // NOT OK

async function startCrawl(){
    let c = new WebCrawler();
    await updateProfile(urlList);
    await c.crawl(urlList, true/*if this */);
}

// function. 
export async function webCronJob(){
    Analytics.launch(TELEMETRY_APP_NAME);
    // await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        d(`${Date.now()} Running a task every 30 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





