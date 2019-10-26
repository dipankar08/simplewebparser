
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class TechCrunchConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'Tech Crunch',
            is_active:true,
        }
    }
    getLang(): LANG {
        return LANG.ENGLISH
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',  selector: 'article h1', type: Type.TEXT },
        { name: 'img',  selector: 'article .article__featured-image-wrapper  img', type: Type.IMAGE },
        { name: 'details', selector: 'article .article-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://techcrunch.com/2019/10/17/luna-display-now-supports-older-macs-as-a-secondary-screen/"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/apps/'},
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/startups/'},
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/gadgets/'},
        ]
    }
}
