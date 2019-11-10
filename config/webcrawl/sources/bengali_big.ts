import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'AajKal',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aajkaal.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.KOLKATA, url:'https://www.aajkaal.in/kolkata'},
            {stream: STREAM.STATE, url:'https://www.aajkaal.in/state'},
            {stream: STREAM.NATIONAL, url:'https://www.aajkaal.in/national'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.aajkaal.in/international'},
            {stream: STREAM.BUSINESS, url:'https://www.aajkaal.in/business'},
            {stream: STREAM.ENTERTAINMENT, url:'https://www.aajkaal.in/entertainment'},
            {stream: STREAM.SPORTS, url:'https://www.aajkaal.in/sports'},
            {stream: STREAM.NORTH_BENGAL, url:'https://www.aajkaal.in/northbengal'},
            {stream: STREAM.LIFESTYLE, url:'https://www.aajkaal.in/lifestyle'},
            {stream: STREAM.OFF_BEAT, url:'https://www.aajkaal.in/offbeat'},
            {stream: STREAM.TOUR, url:'https://www.aajkaal.in/tour'},
            {stream: STREAM.TECHNOLOGY, url:'https://www.aajkaal.in/sciencetechnology'},
            {stream: STREAM.HEALTH, url:'https://www.aajkaal.in/helth'},
        ],
        link_selector:'.image-holder a',
        storyParseConfig:[
            { name: 'title',   selector: '.blog-detail-banner h1', type: WebElementType.TEXT },
            { name: 'img',     selector: '.blog-detail-banner .image-holder  img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.blog-detail  p', type: WebElementType.TEXT },
        ]
    },   
    {
        name:'Bartaman',
        profile_img:'https://bartamanpatrika.com/images/logo.png',
        type:new BartamanWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.HEADLINE, url:'https://bartamanpatrika.com/'},
            {stream: STREAM.FIRST_PAGE, url:'https://bartamanpatrika.com/section.php?cID=12'},
            {stream: STREAM.STATE, url:'https://bartamanpatrika.com/section.php?cID=13'},
            {stream: STREAM.COUNTRY, url:'https://bartamanpatrika.com/section.php?cID=14'},
            {stream: STREAM.INTERNATIONAL, url:'https://bartamanpatrika.com/section.php?cID=15'},
            {stream: STREAM.SPORTS, url:'https://bartamanpatrika.com/section.php?cID=18'},
            {stream: STREAM.ENTERTAINMENT, url:'https://bartamanpatrika.com/section.php?cID=45'},
            {stream: STREAM.LIFESTYLE, url:'https://bartamanpatrika.com/section.php?cID=4'},
            {stream: STREAM.SCIENCE, url:'https://bartamanpatrika.com/section.php?cID=67'},
        ]
    },
    {
        name:'Ei Somoy',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/ei_somoy.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.other_main_news1 li> a',url:'https://eisamay.indiatimes.com/'},
            {stream: STREAM.STATE, url:'https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/articlelist/15991773.cms'},
            {stream: STREAM.COUNTRY, url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},
            {stream: STREAM.INTERNATIONAL, url:'https://eisamay.indiatimes.com/international/articlelist/15819594.cms'},
            {stream: STREAM.BUSINESS, url:'https://eisamay.indiatimes.com/business/articlelist/15819574.cms'},
            {stream: STREAM.COUNTRY, url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},
            {stream: STREAM.ENTERTAINMENT, url:'https://eisamay.indiatimes.com/entertainment/cinema/articlelist/15935855.cms'}, 
        ]
    },
    {
        name:'Statesman Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dainikstatesman.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.COUNTRY, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/world'},
            {stream: STREAM.STATE, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bengal'},
            {stream: STREAM.ENTERTAINMENT, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/binodan'},
            {stream: STREAM.SPORTS, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/sports'},
            {stream: STREAM.EDITORIAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/editorial'},
            {stream: STREAM.FOOD, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/food'},
            {stream: STREAM.OTHER, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bichitra'},
        ],
        storyParseConfig:[
            { name: 'title',   selector: '.storybox h1', type: WebElementType.TEXT },
            { name: 'img',     selector: '.storybox .imgholder  img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.storybox .content-body > p', type: WebElementType.TEXT },
        ]
    },
    {
        name:'Pratidin',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/sangbad_pratidin.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            { stream: STREAM.HEADLINE, selector:'.carousel  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.HEADLINE, selector:'.daily-news  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.FIRST_PAGE, selector:'.tatka_update_list  .scale_img a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.FIRST_PAGE, selector:'ul.more_news_list li > a',url:'https://www.sangbadpratidin.in/latest-update/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.container .hot_news h1', type: WebElementType.TEXT },
            { name: 'details', selector: '.container .news_content_area > p', type: WebElementType.TEXT },
            { name: 'img', selector: '.container img.hot_news_image', type: WebElementType.IMAGE },
        ]
    },
    {
        name:'Anandabazar',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/abp_ananada.jpg',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {url:'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream:STREAM.FIRST_PAGE},

            {url:'https://www.anandabazar.com/state',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.STATE},
            {url:'https://www.anandabazar.com/international',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.INTERNATIONAL},
            {url:'https://www.anandabazar.com/business',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.BUSINESS},
            {url:'https://www.anandabazar.com/others/science',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.SCIENCE},
            {url:'https://www.anandabazar.com/entertainment',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.ENTERTAINMENT},
            {url:'https://www.anandabazar.com/topic/short-story',   selector: '.row .article-image > a', stream:STREAM.SHORT_STORY},
            {url:'https://www.anandabazar.com/travel',   selector: '.carousel-inner .item a', stream:STREAM.TRAVEL},
        ],
        storyParseConfig:[
            { name: 'title', selector: '#story_container h1', type: WebElementType.TEXT },
            { name: 'details', selector: '#story_container .articleBody', type: WebElementType.TEXT },
            { name: 'img', selector: '#story_container  img', type: WebElementType.IMAGE },
        ]
    },

    {
        name:'BBC Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bbc_bangla.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.eagle .eagle-item > a',url:'https://www.bbc.com/bengali/news'},
        ],
        storyParseConfig:[
            { name: 'title',   selector: '.story-body h1', type: WebElementType.TEXT },
            { name: 'details', selector: '.story-body .story-body__inner > p', type: WebElementType.TEXT },
            { name: 'img',     selector: '.story-body figure  img', type: WebElementType.IMAGE },
        ]
    },
    {
        name:'Nilkontho',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/nilkantho.in.png',
        type:new ArticleWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE,url:'https://www.nilkantho.in/category/news/kolkata/'},
            {stream: STREAM.STATE,url:'https://www.nilkantho.in/category/news/state/'},
            {stream: STREAM.COUNTRY,url:'https://www.nilkantho.in/category/news/national/'},
            {stream: STREAM.INTERNATIONAL,url:'https://www.nilkantho.in/category/news/world/'},
            {stream: STREAM.ENTERTAINMENT,url:'https://www.nilkantho.in/category/news/entertainment/'},

            {stream: STREAM.SPORTS,url:'https://www.nilkantho.in/category/news/sports/'},
            {stream: STREAM.BUSINESS,url:'https://www.nilkantho.in/category/news/business/'},
            {stream: STREAM.SCIENCE,url:'https://www.nilkantho.in/category/news/scitech/'},
            
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/lifestyle/'},
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/health'},
        ]
    },
]