const initiaSate = {
    name:'',
    value:0,
}
export default function user(state=initiaSate,action){
    switch(action.type){
        case "SetName":{
            state={
                ...state,
                name:state.name=action.playload
            }
            break;
        }
        case "INC":{
           state={
               ...state,
               value:state.value += action.playload
           }
        }        
       default:
       
    }
return state;
}