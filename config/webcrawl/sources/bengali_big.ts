import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";
import { WordPressRssReader } from "../rss_reader";

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
            {stream: STREAM.FIRST_PAGE, url:'https://www.aajkaal.in/state'},
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
            {stream: STREAM.FIRST_PAGE, url:'https://bartamanpatrika.com/'},
            {stream: STREAM.FIRST_PAGE, url:'https://bartamanpatrika.com/section.php?cID=12'},
            {stream: STREAM.FIRST_PAGE, url:'https://bartamanpatrika.com/section.php?cID=13'},
            {stream: STREAM.COUNTRY, url:'https://bartamanpatrika.com/section.php?cID=14'},
            {stream: STREAM.INTERNATIONAL, url:'https://bartamanpatrika.com/section.php?cID=15'},
            {stream: STREAM.SPORTS, url:'https://bartamanpatrika.com/section.php?cID=18'},
            {stream: STREAM.ENTERTAINMENT, url:'https://bartamanpatrika.com/section.php?cID=45'},
            {stream: STREAM.LIFESTYLE, url:'https://bartamanpatrika.com/section.php?cID=4'},
            {stream: STREAM.SCIENCE, url:'https://bartamanpatrika.com/section.php?cID=67'},
        ]
    },
    {
        name:'mahanagar24x7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/mahanagar24x7.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.mahanagar24x7.com/feed'},
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.mahanagar24x7.com/category/kolkata/feed'},
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.mahanagar24x7.com/category/banga/feed'},
            {stream: STREAM.NATIONAL, url:'https://bengali.mahanagar24x7.com/category/national/feed'},
            {stream: STREAM.INTERNATIONAL, url:'https://bengali.mahanagar24x7.com/category/international/feed'},
            {stream: STREAM.SPORTS, url:'https://bengali.mahanagar24x7.com/category/sport-newss/feed'}, 
            {stream: STREAM.ENTERTAINMENT, url:'https://bengali.mahanagar24x7.com/category/entertainment/feed'},
            {stream: STREAM.OFF_BEAT, url:'https://bengali.mahanagar24x7.com/category/offbeat/feed'}, 
            {stream: STREAM.LIFESTYLE, url:'https://bengali.mahanagar24x7.com/category/life-style/feed'}, 
            {stream: STREAM.TECHNOLOGY, url:'https://bengali.mahanagar24x7.com/category/technology/feed'}, 
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader()
    },
    {
        name:'Ei Somoy',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/ei_somoy.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'http://eisamay.indiatimes.com/city/rssfeedsection/15819618.cms'},
            {stream: STREAM.FIRST_PAGE, url:'http://eisamay.indiatimes.com/state/rssfeedsection/15819609.cms'},
            {stream: STREAM.NATIONAL, url:'http://eisamay.indiatimes.com/nation/rssfeedsection/15819599.cms'},
            {stream: STREAM.INTERNATIONAL, url:'http://eisamay.indiatimes.com/international/rssfeedsection/15819594.cms'},
            {stream: STREAM.SPORTS, url:'http://eisamay.indiatimes.com/sports/rssfeedsection/23000116.cms'},
            {stream: STREAM.BUSINESS, url:'http://eisamay.indiatimes.com/business/rssfeedsection/15819574.cms'}, 
            {stream: STREAM.ENTERTAINMENT, url:'http://eisamay.indiatimes.com/entertainment/rssfeedsection/15819570.cms'},
            {stream: STREAM.LIFESTYLE, url:'http://eisamay.indiatimes.com/lifestyle/rssfeedsection/15992436.cms'}, 
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader()
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
            {stream: STREAM.FIRST_PAGE, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bengal'},
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
            { stream: STREAM.FIRST_PAGE, selector:'.carousel  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.FIRST_PAGE, selector:'.daily-news  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
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
            {url:'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream:STREAM.FIRST_PAGE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream:STREAM.FIRST_PAGE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream:STREAM.FIRST_PAGE},

            {url:'https://www.anandabazar.com/state',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.FIRST_PAGE},
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
        ],
        some_data_might_be_missing:true,
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
            {stream: STREAM.FIRST_PAGE,url:'https://www.nilkantho.in/category/news/state/'},
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