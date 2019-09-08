import { strict } from "assert";
var _ = require('lodash');

let request = require('async-request'),
    response;
const cheerio = require('cheerio')
var Url = require('url-parse');
export enum Type {
    TEXT,
    IMAGE,
    MULTI_TEXT,
}
export type PageParseConfig = {
    name: string,
    selector: string;
    type: Type
}

export type ExpandLinkConfig = {
    root_url: string,
    a_selector_list: Array<string>;
    extra: object,
    limit:number,
}

export class Crawler {
    config: Array<PageParseConfig>;
    constructor(config: Array<PageParseConfig>) {
        this.config = config;
    }
    public async parse(url: string) {
        let result = {}
        result['url'] = url;
        try {
            console.log(url);
            let url1 = new Url(url);
            console.log(`[DEBUG] TRY Fetching... ${url}`);
            let resp = await request(url);
            result['hostname'] = url1.hostname
            let $ = cheerio.load(resp.body);
            for (var item of this.config) {
                switch (item.type) {
                    case Type.TEXT:
                        let val = this.cleanHtmlData($(item.selector).text().trim())
                        result[item.name] = val;
                        break;
                    case Type.IMAGE:
                        result[item.name] = this.absUrl(url, $(item.selector).attr('src'))
                        break;
                }
            }
        } catch (error) {
            console.log(`[ERROR] article parse failed for URL:${url}, Error is: ${error}`)
            console.log(error);
        }
        return result;
    }
    public async parseMany(config:ExpandLinkConfig) {
        console.log(`[DEBUG] Parse many for : ${config.root_url}`);
        console.log(`[DEBUG] TRY Fetching... ${config.root_url}`);
        let resp = await request(config.root_url);
        let $ = cheerio.load(resp.body);
        let url_list1:any[] = []
        for(let s of config.a_selector_list){
            for(let n of $(s)){
                url_list1.push(n)
            }
        }
        url_list1 = url_list1.slice(0, config.limit);
        let url_list2 = []
        for(let  u of url_list1){
            url_list2.push(this.absUrl(config.root_url, u.attribs.href))
        }
        console.log(`[DEBUG] URL LIST : ${url_list2}`);
        if(url_list2.length == 0){
            console.log(`[DEBUG] PARSE MANY FAILED: not a single child url found for ${config.root_url}`);
            return []
        }
        let result = []
        for( let u of url_list2){
            let res = await this.parse(u);
            result.push(_.assignIn(res, config.extra))
        }
        return result;

    }

    public absUrl(root:string, url:string){
        if(url[0] == '/' && url[1] == '/'){
            return Url(root).protocol+url;
        }
        if(url[0] != '/'){
            return url;
        }
        return (new Url(root)).origin+url;
    }

    // this function will clean the data.
    public cleanHtmlData(str:string){
        str = str.replace(/[\t ]+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n'); 
        str = str.trim()
        if(str.length == 0){
            console.log(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
        }
        return str;
    }
}


