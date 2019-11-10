import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'Templates',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aajkaal.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:false,
        is_partner:false,
        links:[
            {stream: STREAM.KOLKATA, url:'https://www.aajkaal.in/kolkata'},
            {stream: STREAM.STATE, url:'https://www.aajkaal.in/state'},
        ],
        link_selector:'.image-holder a',
        storyParseConfig:[
            { name: 'title',   selector: '.blog-detail-banner h1', type: WebElementType.TEXT },
            { name: 'img',     selector: '.blog-detail-banner .image-holder  img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.blog-detail  p', type: WebElementType.TEXT },
        ]
    }
]