const cron = require('node-cron');
var Url = require('url-parse');
const request = require("request-promise");
import { webCronJob } from "./config/webcrawl/main";
webCronJob();

