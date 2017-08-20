export  function  Users(name){
    return{
        type:"SetName",
        playload:name
    }
}
export function INC(){
    return {
        type:"INC",
        playload:1
    }
}
export function UID(name){
    return{
        type:"SAVE_UID",
        playload:name
    }
}
export function GET_DATA(data){
    return{
        type:"GET_DATA",
        playload:data
    }
}