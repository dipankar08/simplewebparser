const cron = require('node-cron');
const fetch = require('node-fetch');
 import {Crawler, Type, ExpandLinkConfig} from './crawler'

const LIMIT:number =2;
enum LANG{
    BENGALI,
    ENGLISH,
    HINDI,
}


let bartaman = new Crawler([
    { name: 'title', selector: '.head-news h4', type: Type.TEXT },
    { name: 'details', selector: '.head-news .content', type: Type.TEXT },
    { name: 'img', selector: '.head-news .thumbnail img', type: Type.IMAGE },
]);

let anandabazar = new Crawler([
    { name: 'title', selector: '#story_container h1', type: Type.TEXT },
    { name: 'details', selector: '#story_container .articleBody', type: Type.TEXT },
    { name: 'img', selector: '#story_container  img', type: Type.IMAGE },
]);




// -- ZEE NEWS --
let zeenews = new Crawler([
    { name: 'title', selector: '.content h1', type: Type.TEXT },
    { name: 'details', selector: '.content .article', type: Type.TEXT },
    { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
]);

let zeenews_bengali:ExpandLinkConfig = {
    root_url: 'https://zeenews.india.com/bengali/',
    a_selector_list: ['.mini-list-story > a'],
    extra: {'lang':LANG[LANG.BENGALI]},
    limit:LIMIT,
}
let zeenews_hindi:ExpandLinkConfig = {
    root_url: 'https://zeenews.india.com/hindi/',
    a_selector_list: ['.mini-list-story .mini-con  a'],
    extra: {'lang':LANG[LANG.HINDI]},
    limit:LIMIT,
}
let zeenews_english:ExpandLinkConfig = {
    root_url: 'https://zeenews.india.com/',
    a_selector_list: ['.mini-list-story .mini-con  a'],
    extra: {'lang':LANG[LANG.ENGLISH]},
    limit:LIMIT,
}

// news18
let news18 = new Crawler([
    { name: 'title', selector: '#article h1', type: Type.TEXT },
    { name: 'details', selector: '#article .storypara', type: Type.TEXT },
    { name: 'img', selector: '#article .articleimg img', type: Type.IMAGE },
]);
let news18_cra1 = new Crawler([
    { name: 'title', selector: '.article_box h1', type: Type.TEXT },
    { name: 'details', selector: '.article_box #article_body p', type: Type.TEXT },
    { name: 'img', selector: '.article_box .articleimg img', type: Type.IMAGE },
]);
let news18_bengali:ExpandLinkConfig = {
    root_url:  'https://bengali.news18.com/',
    a_selector_list: ['.ld-story-rgt li  a'],
    extra: {'lang':LANG[LANG.BENGALI]},
    limit:LIMIT,
}
let news18_hindi:ExpandLinkConfig = {
    root_url: 'https://hindi.news18.com/',
    a_selector_list:['#hp-breaknews > a', '.ld-story-rgt li  a'],
    extra: {'lang':LANG[LANG.HINDI]},
    limit:LIMIT,
}
let news18_english:ExpandLinkConfig = {
    root_url:  'https://www.news18.com/',
    a_selector_list: ['.lead-mstory li  a'],
    extra: {'lang':LANG[LANG.ENGLISH]},
    limit:LIMIT,
}



async function save(res){
    const body = { '_payload': res}; 
    fetch('http://simplestore.dipankar.co.in/api/news/bulk_insert', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
}

async function execute(){   
    save(await zeenews.parseMany(zeenews_bengali));
    save(await news18_cra1.parseMany(news18_bengali));
    //save(await zeenews.parseMany(zeenews_english));
    //save(await zeenews.parseMany(zeenews_hindi));
 
    //save(await news18.parseMany(news18_hindi));
    //save(await news18.parseMany(news18_english));
}

function start(){
    cron.schedule('*/2 * * * *', () => {
        console.log(`${Date.now()} Running a task every two minutes`);
        execute();
    });
}

start();
