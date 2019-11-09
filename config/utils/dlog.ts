export function d(msg:any){
    console.log(`[DEBUG] ${msg}`)
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