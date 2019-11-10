var rp = require('request-promise');
import * as fs from 'fs';
var cheerio = require('cheerio'); 
import {d, ex} from './../utils/dlog'
import { StringAnyMap } from '../utils/types';
var Url = require('url-parse');

export type WebElementParseConfig = {
    name: string,
    selector: string;
    type: WebElementType,
    attr?:string,
}

export enum WebElementType {
    TEXT,
    IMAGE,
    MULTI_TEXT,
    TEXT_MULTI,
    INNER_TEXT,
    URL_LIST
}

async function findAllImage(url, selector):Promise<Array<any>>{
    try{
        d(`Fetching ${url} ...`)
        let $  = await rp.get({url:url,transform: function (body) {
            return cheerio.load(body);
        }})
        let data = $(selector).toArray().map(x=>{
            if(x.attribs){
                return {url:x.attribs.src, filename:x.attribs.title.toLowerCase().replace(/ /g,'_')+'.png' }
            } else{
                return null;
            }
        })
        return data;
    } catch(e){
        console.log(e)
    }
}

async function findAllUrls(url, selector):Promise<Array<any>>{
    try{
        d(`Fetching ${url} ...`)
        let $  = await rp.get({url:url,transform: function (body) {
            return cheerio.load(body);
        }})
        let data = $(selector).toArray().map(x=>{
            if(x.attribs){
                return {url:x.attribs.href, title:x.attribs.title.toLowerCase().replace(/ /g,'_')}
            } else{
                return null;
            }
        })
        return data;
    } catch(e){
        console.log(e)
    }
}

// find a object of information form a page.
export async function findAllData(url, config_list:Array<WebElementParseConfig>, $=null):Promise<StringAnyMap>{
    try{
        // this allow passing $ object directly which will skip the fetching request.
        if($ == null){
            d(`Fetching ${url} ...`)
             $ = await rp.get({url:url,transform: function (body) {
                return cheerio.load(body);
            }})
        }
        let res = {}
        for(var k of config_list){
            res[k.name] = parseWebElements(url, $, $('html'),k)
        }
        return res;
    } catch(e){
        console.log(e)
    }
}

// find a list of object of information form a page.
export async function findAllDataList(url:string, list_selector:string, entries:Array<WebElementParseConfig>, $=null):Promise<Array<StringAnyMap>>{
    try{
        // this allow passing $ object directly which will skip the fetching request.
        if($ == null){
            d(`Fetching ${url} ...`)
             $ = await rp.get({url:url,transform: function (body) {
                return cheerio.load(body);
            }})
        }

        let data = $(list_selector).toArray().map(x=>{
            var res ={
                'url': url
            }
            for(let k of entries){
                res[k.name] = parseWebElements(url,$, $(x), k)
            }
            return res;
        })
        return data;
    } catch(e){
        console.log(e)
    }
}

//tested
function parseWebElements(url:string, $, entry,  config: WebElementParseConfig){
    try{
        switch (config.type) {
            case WebElementType.URL_LIST:
                let url_list: Array<string>  = []
                for(let n of $(config.selector)){
                    url_list.push(n.attribs.href)
                }
                url_list = url_list.map(x=> absUrl(url.toString(), x));
                return url_list;

            case WebElementType.INNER_TEXT:
                return entry.find(config.selector)[0].next.data;
            case WebElementType.TEXT:
                return cleanHtmlData(url, entry.find(config.selector).text())
            case WebElementType.TEXT_MULTI:
                let val = cleanHtmlData(url, entry.find(config.selector).toArray().map(x=>$(x).text()).join('\n'))
                return val;
            case WebElementType.IMAGE:
                if(!config.attr){
                    config.attr = 'src' 
                }
                return absUrl(url, entry.find(config.selector).attr(config.attr))
        }
    } catch(e){
        ex(e);
    }
    return null;
}

// this function will clean the data.
export function cleanHtmlData(url:string, str:string){
    str = str.trim()
    str = str.replace(/[\t ]+/g, " ");
    str = str.replace(/[\r\n]+/g, '\n'); 
    str = str.replace(/[\n]+/g, '\n'); 
    // somehow replace consecutive replace doesn't work
    str = str.split("\n").filter( x=> {
        if(x.trim().length < 1){
            return false;
        }
        return true;
    }
    ).join("\n");
    if(str.length == 0){
        d(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
    }
    return str;
}

export function absUrl(root:string, url:string){
    if(url == null || url.length == 0){
        return null
    }
    // https or http://
    if(url.startsWith("http")){
        return url;
    }

    if(url.startsWith("www")){
        return url;
    }

    //  starts with //abc.face
    if(url[0] == '/' && url[1] == '/'){
        return Url(root).protocol+url;
    }
    // syarts with /abc/def
    if(url[0] == '/'){
        return (new Url(root)).origin+url;
    }

    // sarts with anything else like "detailsnews?..."
    return Url(root).origin+"/"+url;
}
