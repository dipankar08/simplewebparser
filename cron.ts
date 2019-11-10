const cron = require('node-cron');
var Url = require('url-parse');
const request = require("request-promise");
import { webCronJob } from "./config/webcrawl/main";



//cronJob();
webCronJob();
//new Totka24X7Config().execute()
