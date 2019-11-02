let Parser = require('rss-parser');
let parser = new Parser();
import {getHostNameFromUrl} from "../utils/helper"
import { parse } from 'node-html-parser';
var fastparser = require('fast-xml-parser');
import { Analytics } from "../../analytics";
import { LANG, STREAM, Content } from "../CONST";
import { String } from "lodash";
import { WebConfig, WebElementType } from "./network";
import { WebEntryPoint } from "./web_entrypoints";
const request = require('request-promise');

export enum WEB_TYPE {
    WORD_PRESS,
    ABP,
    ZEE
}

export abstract class BaseWebReader {
    public abstract getType():WEB_TYPE;
    public abstract getWebConfig():WebConfig;
    public abstract async read(entrypoint:WebEntryPoint): Promise<Array<Content>>;
}

export class WordPressWebReader extends BaseWebReader {
    public getType(): WEB_TYPE {
        return WEB_TYPE.WORD_PRESS;
    }    
    public getWebConfig(): WebConfig {
        return {
            list_selector:'',
            storyParseConfig:[
                { name: 'title',   selector: 'article header h1', type: WebElementType.TEXT },
                { name: 'img',     selector: 'article  .td-post-featured-image img', type: WebElementType.IMAGE },
                { name: 'details', selector: 'article .td-post-content > p', type: WebElementType.TEXT }]
        }
    }
    public async read(entrypoint: WebEntryPoint): Promise<Content[]> {
        return []
    }
}






