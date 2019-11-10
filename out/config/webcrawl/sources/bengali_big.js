"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
exports.urlList = [
    {
        name: 'Bartaman',
        profile_img: 'https://bartamanpatrika.com/images/logo.png',
        type: new web_reader_1.BartamanWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://bartamanpatrika.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bartamanpatrika.com/section.php?cID=12' },
            { stream: CONST_1.STREAM.STATE, url: 'https://bartamanpatrika.com/section.php?cID=13' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://bartamanpatrika.com/section.php?cID=14' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://bartamanpatrika.com/section.php?cID=15' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://bartamanpatrika.com/section.php?cID=18' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://bartamanpatrika.com/section.php?cID=45' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://bartamanpatrika.com/section.php?cID=4' },
            { stream: CONST_1.STREAM.SCIENCE, url: 'https://bartamanpatrika.com/section.php?cID=67' },
        ]
    },
    {
        name: 'Ei Somoy',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/ei_somoy.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.other_main_news1 li> a', url: 'https://eisamay.indiatimes.com/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/articlelist/15991773.cms' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://eisamay.indiatimes.com/international/articlelist/15819594.cms' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://eisamay.indiatimes.com/business/articlelist/15819574.cms' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://eisamay.indiatimes.com/entertainment/cinema/articlelist/15935855.cms' },
        ]
    },
    {
        name: 'Statesman Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dainikstatesman.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/world' },
            { stream: CONST_1.STREAM.STATE, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/bengal' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/binodan' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/sports' },
            { stream: CONST_1.STREAM.EDITORIAL, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/editorial' },
            { stream: CONST_1.STREAM.FOOD, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/food' },
            { stream: CONST_1.STREAM.OTHER, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/bichitra' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.storybox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.storybox .imgholder  img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.storybox .content-body > p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'Pratidin',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/sangbad_pratidin.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.carousel  .scale_img_block > a', url: 'https://www.sangbadpratidin.in/' },
            { stream: CONST_1.STREAM.HEADLINE, selector: '.daily-news  .scale_img_block > a', url: 'https://www.sangbadpratidin.in/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.tatka_update_list  .scale_img a', url: 'https://www.sangbadpratidin.in/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'ul.more_news_list li > a', url: 'https://www.sangbadpratidin.in/latest-update/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.container .hot_news h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'details', selector: '.container .news_content_area > p', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.container img.hot_news_image', type: htmlparser_1.WebElementType.IMAGE },
        ]
    },
    {
        name: 'Anandabazar',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/abp_ananada.jpg',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { url: 'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream: CONST_1.STREAM.HEADLINE },
            { url: 'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream: CONST_1.STREAM.HEADLINE },
            { url: 'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream: CONST_1.STREAM.FIRST_PAGE },
            { url: 'https://www.anandabazar.com/state', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.STATE },
            { url: 'https://www.anandabazar.com/international', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.INTERNATIONAL },
            { url: 'https://www.anandabazar.com/business', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.BUSINESS },
            { url: 'https://www.anandabazar.com/others/science', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.SCIENCE },
            { url: 'https://www.anandabazar.com/entertainment', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.ENTERTAINMENT },
            { url: 'https://www.anandabazar.com/topic/short-story', selector: '.row .article-image > a', stream: CONST_1.STREAM.SHORT_STORY },
            { url: 'https://www.anandabazar.com/travel', selector: '.carousel-inner .item a', stream: CONST_1.STREAM.TRAVEL },
        ],
        storyParseConfig: [
            { name: 'title', selector: '#story_container h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'details', selector: '#story_container .articleBody', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '#story_container  img', type: htmlparser_1.WebElementType.IMAGE },
        ]
    },
    {
        name: 'BBC Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bbc_bangla.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.eagle .eagle-item > a', url: 'https://www.bbc.com/bengali/news' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.story-body h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'details', selector: '.story-body .story-body__inner > p', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.story-body figure  img', type: htmlparser_1.WebElementType.IMAGE },
        ]
    },
    {
        name: 'Nilkontho',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/nilkantho.in.png',
        type: new web_reader_1.ArticleWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://www.nilkantho.in/category/news/kolkata/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.nilkantho.in/category/news/state/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.nilkantho.in/category/news/national/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.nilkantho.in/category/news/world/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.nilkantho.in/category/news/entertainment/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.nilkantho.in/category/news/sports/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.nilkantho.in/category/news/business/' },
            { stream: CONST_1.STREAM.SCIENCE, url: 'https://www.nilkantho.in/category/news/scitech/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.nilkantho.in/category/lifestyle/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.nilkantho.in/category/health' },
        ]
    },
];
//# sourceMappingURL=bengali_big.js.map