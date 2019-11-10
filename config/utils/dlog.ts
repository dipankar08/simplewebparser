import _ = require("lodash")

export function d(msg:any){
    if(_.isString(msg)){
        console.log(`[DEBUG] ${msg}`)
    } else{
        console.log(`[DEBUG] ${JSON.stringify(msg)}`)
    }
   
}
export function i(msg:any){
    console.log(`[INFO] ${msg}`)
}
export function e(msg:any){
    console.log(`[ERROR] ${msg}`)
}
export function ex(msg:Error){
    console.log(`[FETAL] ${msg.stack}`)
}