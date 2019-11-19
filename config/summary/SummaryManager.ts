import { String } from "lodash";
import { d, ex } from "../utils/dlog";

export enum SummaryStrategy{
    NULL,
    DEFAULT,
    AUTO,
    BENAGLI,
    HINDI,
    ENGLISH,
}

export type TokenizationConfig ={
    'para_break':string
    'line_break':string;
    'line_size':30;
}

export class SummeryBuilder {
    strategyMap:Map<SummaryStrategy, BaseStrategyProvider> = new Map();
   constructor(){
        // add you item here.
        let strategyList = [
            new NULLStrategy(),
            new BengaliStrategy(),
            new EnglishStrategy(),
            new HindiStrategy(),
            new DefaultStrategy(),
        ]

        for(var s of strategyList){
            this.strategyMap[s.getStrategy()] = s
        }
   }
    buildSummary(input:string,strategy:SummaryStrategy=null):String {
        if(strategy == null){
            strategy = SummaryStrategy.NULL;
        }
        return this.strategyMap[strategy].process(input);
    }
}

export abstract class BaseStrategyProvider {
    abstract getStrategy():SummaryStrategy;
    abstract process(string):string;
}

// default will return null.
export  class NULLStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.NULL;
    }
    process(String):string{
        return '';
    }
}

// default will return null.
export  class BengaliStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.BENAGLI;
    }
    process(input:string):string{
        let result:Array<string> = []
        try{
            let lines = input.split(/\n|।/).filter(x=>x.length > 10)
            var sel:string = ""
            for(var i =0; i< lines.length; i++){
                let l = lines[i];
                if(sel.length < 120 && sel.length+l.length < 180){
                    sel = sel + l.trim() + "। "
                } else {
                    if(sel.length > 10){
                        result.push(sel);
                    }
                    // push to next line.
                    if(l.length > 10){
                        sel = l.trim()+"| "
                    }
                }
            }
            if(sel.length > 10){
                result.push(sel);
            }

            result = result.slice(0,3);

            return result.map(x=>`●  ${x}`).join("\n");
        } catch(e){
            ex(e)
            d("[INFO] summarization fails")
        }
       return input
    }
}

export  class HindiStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.HINDI;
    }
    process(input:string):string{
        let result:Array<string> = []
        try{
            let lines = input.split(/\n|\.|।/).filter(x=>x.length > 10)
            var sel:string = ""
            lines.forEach(l =>{
                if(sel.length < 120 && sel.length+l.length < 180){
                    sel = sel + l.trim() + ". "
                }else {
                    if(sel.length > 10){
                        result.push(sel);
                    }
                    sel=""
                }
            })
            if(sel.length > 10){
                result.push(sel);
            }
            result = result.slice(0,3);
            return result.map(x=>`●  ${x}`).join("\n");
        } catch(e){
            ex(e)
            d("[INFO] summarization fails")
        }
        return input
    }
}

export  class EnglishStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.ENGLISH;
    }
    process(input:string):string{
        let result:Array<string> = []
        try{
            let lines = input.split(/\n|\.|।/).filter(x=>x.length > 10)
            var sel:string = ""
            lines.forEach(l =>{
                if(sel.length < 120 && sel.length+l.length < 180){
                    sel = sel + l.trim() + ". "
                }else {
                    if(sel.length > 10){
                        result.push(sel);
                    }
                    sel=""
                }
            })
            if(sel.length > 10){
                result.push(sel);
            }
            result = result.slice(0,3);
            return result.map(x=>`●  ${x}`).join("\n");
        } catch(e){
            ex(e)
            d("[INFO] summarization fails")
        }
        return input;
    }
}

export  class DefaultStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.DEFAULT;
    }
    process(input:string):string{
        let result:Array<string> = []
        try{
            let lines = input.split(/\n|\.|।/).filter(x=>x.length > 10)
            var sel:string = ""
            lines.forEach(l =>{
                if(sel.length < 120 && sel.length+l.length < 180){
                    sel = sel + l.trim() + ". "
                }else {
                    if(sel.length > 10){
                        result.push(sel);
                    }
                    sel=""
                }
            })
            if(sel.length > 10){
                result.push(sel);
            }
            result = result.slice(0,3);
            return result.map(x=>`●  ${x}`).join("\n");
        } catch(e){
            ex(e)
            d("[INFO] summarization fails")
        }
        return input;
    }
}
/* 
let content = `দিল্লিতে ভূমিকম্প। মৃদু ভূকম্পন অনুভূত হয় দিল্লিতে। ভূকম্পন অনুভূত লখনউতেও। ভূমিকম্পে সাধারণ মানুষের মধ্যে আতঙ্ক ছড়িয়েছে। এখনও পর্যন্ত কোনও ক্ষয়ক্ষতির খবর পাওয়া যায়নি।গতকাল, সোমবার কেঁপে ওঠে গুজরাতের মাটি ৷  সন্ধে ৭টা ২ নাগাদ কম্পন অনুভূত হয় গুজরাতের কচ্ছ এলাকার ভাচাউ ও আনজারে ৷ রিখটার স্কেলে এই কম্পনের মাত্রা ছিল ৪.৩ ৷ ঘটনায় আতঙ্কিত হয়ে পড়েন সাধারণ মানুষ ৷ অনেকেই ঘর ছেড়ে রাস্তায় বেরিয়ে আসেন ৷ তবে ভূমিকম্পে তেমন ক্ষয়ক্ষতির ঘটনা ঘটেনি ৷`

let sb = new SummeryBuilder();
let res = sb.buildSummary(content, SummaryStrategy.BENAGLI)
d(res);
*/


