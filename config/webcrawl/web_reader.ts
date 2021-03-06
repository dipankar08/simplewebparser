import { WebElementType } from "./htmlparser";
import { WebConfig } from "./network";
const request = require('request-promise');

export abstract class BaseWebReader {
    public abstract getWebConfig():WebConfig;
}

const globalBlackListUrl =['/livetv/','/photogallery/','/videos/','/video/','/videos/','/photos/','/photo/']

export class DefaultWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'body a',
            storyParseConfig:[
                { name: 'title',   selector: 'body h1', type: WebElementType.TEXT },
                { name: 'img',     selector: 'body img', type: WebElementType.IMAGE },
                { name: 'details', selector: 'body p', type: WebElementType.TEXT }]
        }
    }
}

export class BartamanWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'.firstSection a.bisad',
            networkFetcher:this.getDataFromUrl,
            storyParseConfig:[
                { name: 'title',   selector: '.head-news h4', type: WebElementType.TEXT },
                { name: 'img',     selector: '.head-news .thumbnail  img', type: WebElementType.IMAGE },
                { name: 'details', selector: '.head-news .content', type: WebElementType.TEXT },
            ]
        }
    }
    async getDataFromUrl(url:string):Promise<string>{
        let resp = await request(
            { method: 'GET'
            , uri: url
            , gzip: true
            })
        return resp;
    }
}

export class WordPressWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'.td-main-content .td-module-thumb > a',
            storyParseConfig:[
                { name: 'title',   selector: 'article header h1', type: WebElementType.TEXT },
                { name: 'img',     selector: 'article  .td-post-featured-image img', type: WebElementType.IMAGE },
                { name: 'details', selector: 'article .td-post-content > p', type: WebElementType.TEXT }]
        }
    }
}

export class ArticleWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'article h2 a', // used in nil kontho.
            storyParseConfig:[
                { name: 'title',   selector: 'article h1', type: WebElementType.TEXT },
                { name: 'img',     selector: 'article img', type: WebElementType.IMAGE },
                { name: 'details', selector: 'article p ', type: WebElementType.TEXT },
            ]
        }
    }
}

export class News18WebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'.nwslist-withbrdr li a',
            storyParseConfig:[
                { name: 'title', selector: '.article_box h1', type: WebElementType.TEXT },
                { name: 'details', selector: '.article_box #article_body p', type: WebElementType.TEXT },
                { name: 'img', selector: '.article_box .articleimg img', type: WebElementType.IMAGE },
            ]
        }
    }
}

export class OneIndiaWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'article .article-img a',
            storyParseConfig:[
                { name: 'title', selector: 'article h1', type: WebElementType.TEXT },
                { name: 'details', selector: 'article .oi-article-lt > p', type: WebElementType.TEXT },
                { name: 'img', selector: 'article figure  img', type: WebElementType.IMAGE },
            ]
        }
    }
}

export class IndiaTimesWebReader extends BaseWebReader {
    public getWebConfig(): WebConfig {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector:'.artlisting li .imgsec > a',
            storyParseConfig:[
                { name: 'title',   selector: '.leftmain h1', type: WebElementType.TEXT },
                { name: 'img',     selector: '.leftmain .article  .articleImage img', type: WebElementType.IMAGE },
                { name: 'details', selector: '.leftmain arttextxml', type: WebElementType.TEXT },
            ]
        }
    }
}





