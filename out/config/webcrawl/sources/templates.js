"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
exports.urlList = [
    {
        name: 'Templates',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aajkaal.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: false,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.KOLKATA, url: 'https://www.aajkaal.in/kolkata' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.aajkaal.in/state' },
        ],
        link_selector: '.image-holder a',
        storyParseConfig: [
            { name: 'title', selector: '.blog-detail-banner h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.blog-detail-banner .image-holder  img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.blog-detail  p', type: htmlparser_1.WebElementType.TEXT },
        ]
    }
];
//# sourceMappingURL=templates.js.map