import { String } from "lodash";

export enum SummaryStrategy{
    NULL,
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
            new HindiStrategy(),
            new EnglishStrategy(),
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
            lines.forEach(l =>{
                if(sel.length < 120 && sel.length+l.length < 180){
                    sel = sel + l.trim() + "। "
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
            console.log("[INFO] summarization fails")
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
            console.log("[INFO] summarization fails")
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
            console.log("[INFO] summarization fails")
        }
        return input;
    }
}

let content = `Washington: Treasury Secretary Steven Mnuchin and presidential adviser Jared Kushner will lead an American delegation to Saudi Arabia's annual financial conference, US media reported Tuesday, after widespread boycotts of last year's event in protest at the murder of dissident journalist Jamal Khashoggi. Saudi reporter Khashoggi, a columnist for the Washington Post, was strangled and dismembered at the kingdom's consulate in Istanbul on October 2, 2018. Dozens of top global officials and business leaders boycotted last year's Future Investment Initiative (FII), a lavish event dubbed "Davos in the desert", as international outrage over Khashoggi's killing peaked. But the United States, a key ally of the petro-state, will send a top-level delegation to this year's edition led by Mnuchin, the New York Times reported, citing the Treasury Department. Kushner, President Donald Trump's son-in-law, and Brian H Hook, the State Department's special envoy overseeing Iran policy, will also attend, the paper said, citing unnamed sources. The US Treasury did not immediately respond to AFP's request for comment. Global firms including Goldman Sachs, JP Morgan Chase and Citigroup are also planning to send top executives to this year's event, the Washington Post reported earlier. The leaders of India and Pakistan, Narendra Modi and Imran Khan, will also attend, according to local press reports in their countries this week. The conference, which begins next week, is aimed at drawing foreign investors to help Riyadh diversify its oil-reliant economy. Crown Prince Mohammed bin Salman, the conservative petro-state's de facto leader, was feted by global leaders and business titans before Khashoggi's gruesome murder. The global fallout over the killing rendered the heir to the Arab world's most powerful throne a pariah, casting a shadow on his reforms, putting the kingdom's human rights record under the microscope and testing old alliances with Western powers. The CIA has reportedly concluded that the prince, who controls all major levers of power in the Saudi government, likely ordered the killing. A report by United Nations Special Rapporteur Agnes Callamard also said there was "credible evidence" linking him to the murder and an attempted cover up. Eleven suspects have been put on trial in Riyadh over Khashoggi's murder, five of whom face the death penalty, but hearings are held behind closed doors and the names of the defendants have not been released. Amnesty International has denounced the trial in Riyadh as a "sham" and "a mockery of justice". Get the best of News18 delivered to your inbox - subscribe to News18 Daybreak. Follow News18.com on Twitter, Instagram, Facebook, Telegram, TikTok and on YouTube, and stay in the know with what's happening in the world around you – in real time.`
let sb = new SummeryBuilder();
let res = sb.buildSummary(content, SummaryStrategy.ENGLISH)
console.log(res);


