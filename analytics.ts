import { d } from "./config/utils/dlog";

//POST => http://{{server}}/api/_analytics/launch => {"app_id":"{{app_id}}","app_version":"1.0","device_os":"android", "device_id":"abc","device_api":"27"} => "session":"(?<session>.*?)"
//POST => http://{{server}}/api/_analytics/action => {"app_id":"{{app_id}}","session":"{{session}}","type":"click", "target_id":"btn1"} => Tracked action
//POST => http://{{server}}/api/_analytics/exception => {"app_id":"{{app_id}}", "session":"{{session}}","type":"RuntimeException", "location":"Main.c:20","stack":"full stack here"} => Tracked exception
//POST => http://{{server}}/api/_analytics/timeit => {"app_id":"{{app_id}}", "session":"{{session}}", "total_time": 10000, "type" :"Activity", "block":"MainActivity"} => Tracked timeit
const fetch_req = require('node-fetch');
const _ = require('underscore');

type Item = {
    url:String,
    data:Object,
}

export class Analytics {
    static session:string= null;
    static app_id:string=null;


    static pendingItems:Array<Item> = []

    static action(action:string, target_id:string, extra:Object ={}){
        var res = {}
        res['type'] = 'action';
        res['action'] = action;
        res['target_id'] = target_id
        res['tag'] = target_id
        let obj = _.extend(res, extra)
        this.pump('http://simplestore.dipankar.co.in/api/_analytics/action', obj)
    }

    static hit_tracker(extra:Object ={}){
        extra['type'] = 'hit_tracker';
        this.pump('http://simplestore.dipankar.co.in/api/_analytics/hit_tracker', extra)
    }

     static exception(e:Error, extra:Object = {}){
         let errObj = {type:"exception", "error": e.name, location:'Please see the stack', stack:e.stack};
         let obj = _.extend(errObj, extra)
         this.pump('http://simplestore.dipankar.co.in/api/_analytics/exception', obj )
    }

     static timeitStart(tag:string){

    }

     static timeItEnd(tag:string){

    }
    static async launch(napp_id:string){
        this.app_id = napp_id
        let body = {"type":"launch", "app_id":this.app_id,"app_version":"1.0","device_os":"linux", "device_id":"linux","device_api":"0"} 
        await fetch_req('http://simplestore.dipankar.co.in/api/_analytics/launch', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            d(json);
            this.session = json.out.session;
            this.pumpPending();
        });
    }

    static async pumpPending(){
        if(this.session != null){
            for(var item of this.pendingItems){
              await this.pump(item.url, item.data);
            }
            this.pendingItems = [];
        }
    }

    static async pump(url:String, data:Object){
        if(this.session == null){
            this.pendingItems.push({url:url, data:data})
        } else{
            if(data['type'] != 'hit_tracker'){
                data['session'] = this.session;
            }
            data['app_id'] = this.app_id;
            d(`Sending Logs: url: ${url}, data: ${data}`)
            await fetch_req(url, {
                method: 'post',
                body:    JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }).then(res => res.json())
            .then(json => {
                d(json);
            });
        }
    }
}

//Analytics.action("parseError","He is the error", {"url":"URL"});
//Analytics.launch("crawler");
//Analytics.exception(Error("Test"));