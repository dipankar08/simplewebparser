
import { Analytics } from "../../analytics";
import { SummeryBuilder, SummaryStrategy } from "../summary/SummaryManager";
import { LANG, DB_URL, STREAM, Content, Profile, PROFILE_URL, TELEMETRY_DB_IGNORE_INVALID_DATA, TELEMETRY_DB_ERROR_SAVING } from "../CONST";
import { StringAnyMap } from "./types";
import { uniqBy } from "lodash";
import { d } from "./dlog";
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
        if(x && x.title && x.summary && x.img && x.title.length > 0 && x.summary.length > 0 && x.img.length > 0){
            return true;
        } else{
            Analytics.hit_tracker({action: TELEMETRY_DB_IGNORE_INVALID_DATA,url:x.url});
            d(`>>>>>>>>>>>> [ERROR] Empty data received so NOT saving this, URL: ${x.url} <<<<<<<<<<<<<<<`)
            return false
        }
    })
    d(`[RSS] Before unique ${res1.length}`)
    res1 = uniqBy(res1,'url')
    d(`[RSS] After unique ${res1.length}`)
    if(res1.length == 0){
        return;
    }

    const body = { '_payload': res1,"_field":'url'}; 
    d(`[INFO]: Using URL for insert is : ${DB_URL}`)
    let resp = await request({
        uri:`${DB_URL}/insertorupdate`,
        method: 'POST',
        body: body,
        json:true
    });
    d(resp);
    if((resp.status =='error')){
        Analytics.action(TELEMETRY_DB_ERROR_SAVING, resp);
    } else{
        d(`[Debug] Data saved properly in the server: ${resp.msg}`)
    }
}

export async function detectUrlNotInDb(url_list:string[]): Promise<Array<string>|null> {
    url_list = Array.from(new Set(url_list))
    if(url_list.length == 0){
        return null
    }
    // find duplicate in server
    let resp = await request({
        uri: `${DB_URL}/exist`,
        method: 'POST',
        body: {
            _field: 'url',
            _value:url_list
        },
        json: true
    });

    if(resp.status == 'success'){
        url_list =  url_list.filter(x=> resp.out.found_list[x] == null)
        d(`[INFO] Total link which is NOT in DB: ${url_list.length}, DB Found count: ${resp.out.found_count}`)
    } else{
        return ;
    }
    return url_list;
}

export async function updateProfileToDb(profiles: Array<Profile>){
    let resp = await request({
        uri:`${PROFILE_URL}/insertorupdate`,
        method: 'POST',
        body:{
            _payload:profiles,
            _field:'hostname'
        },
        json: true
    });
    d(resp)
}