import { WebEntryPoint, urlList } from "./web_entrypoints";
import { updateProfileToDb, getHostNameFromUrl } from "../utils/db_helper";
import { LANG, STREAM } from "../CONST";
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

async function startCrawl(){
    let c = new WebCrawler();
    await updateProfile(urlList);
    await c.crawl(urlList, true/*if this */,'dinamani');
}
// function. 
export async function webCronJob(){
    Analytics.launch("crawler_web");
    // await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        d(`${Date.now()} Running a task every 30 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





