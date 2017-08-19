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