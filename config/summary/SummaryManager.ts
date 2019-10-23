import { String } from "lodash";

export enum SummaryStrategy{
    NULL,
    AUTO,
    LINE_BREAK,
}

export class SummeryBuilder {
    strategyMap:Map<SummaryStrategy, BaseStrategyProvider> = new Map();
   constructor(){
        // add you item here.
        let strategyList = [
            new NULLStrategy(),
        ]

        for(var s of strategyList){
            this.strategyMap[s.getStrategy()] = s
        }
   }
    buildSummary(input:string,strategy:SummaryStrategy=null):String {
        if(strategy == null){
            strategy = SummaryStrategy.NULL;
        }
        return this.strategyMap.get(strategy).process(input);
    }
}

export abstract class BaseStrategyProvider {
    abstract getStrategy():SummaryStrategy;
    abstract process(String):String;
}

// default will return null.
export  class NULLStrategy extends BaseStrategyProvider {
    getStrategy():SummaryStrategy{
        return SummaryStrategy.NULL;
    }
    process(String):String{
        return null;
    }
}