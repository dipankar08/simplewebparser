
import { Analytics } from "../../analytics";
import { SummeryBuilder, SummaryStrategy } from "../summary/SummaryManager";
import { LANG, DB_URL, STREAM, Content } from "../CONST";
import { StringAnyMap } from "./types";
import { uniqBy } from "lodash";
const request = require('request-promise');

var Url = require('url-parse');
export function getHostNameFromUrl(url:string){
    return new Url(url).hostname
}

export async function saveToDB(res:Array<Content>|null){
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
    console.log(`[RSS] Before unique ${res1.length}`)
    res1 = uniqBy(res1,'url')
    console.log(`[RSS] After unique ${res1.length}`)
    if(res1.length == 0){
        return;
    }

    // building summary as we insert.
    let sb = new SummeryBuilder()
    let payload = res1.map(x=>{
        let entry:StringAnyMap = x;
        switch(x.lang){
            case LANG.IN_BENGALI:
                entry['summary']= sb.buildSummary(x.details, SummaryStrategy.BENAGLI)
                break;
            case LANG.IN_ENGLISH:
                entry['summary']= sb.buildSummary(x.details, SummaryStrategy.ENGLISH)
                break;
            case LANG.IN_HINDI:
                entry['summary']= sb.buildSummary(x.details, SummaryStrategy.HINDI)
                break;
        }
        entry.lang = LANG[x.lang]
        entry.stream = STREAM[x.stream]
        entry.is_active = "1"
        return entry;
    })

    const body = { '_payload': payload,"_field":'url'}; 
    console.log(`[INFO]: Uisng URL for insert is : ${DB_URL}`)
    let resp = await request({
        uri:`${DB_URL}/insertorupdate`,
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

export async function detectUrlNotInDb(url_list:string[]): Promise<Array<string>|null> {
    url_list = Array.from(new Set(url_list))
    if(url_list.length == 0){
        return null
    }
    // find duplicate in server
    let resp = await request(`${DB_URL}/exist`,{
        method: 'POST',
        data: JSON.stringify({
            _field: 'url',
            _value:url_list
        })
    });

    let obj = JSON.parse(resp.body)
    if(obj.status == 'success'){
        url_list =  url_list.filter(x=> obj.out.found_list[x] == null)
        console.log(`[INFO] Total link which is NOT in DB: ${url_list.length}, DB Found count: ${obj.out.found_count}`)
    } else{
        return ;
    }
    return url_list;
}