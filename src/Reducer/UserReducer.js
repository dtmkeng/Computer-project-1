const Instate = {
    name:'',
    email:'',
    pass:'',
    study:'',
    id:'',
    value:0
}
export default function User(state=Instate,action){
    switch(action.type){
        case "SAVE_UID":{
            state={
                ...state,
                id:state.id=action.playload
            }
           break;
        }
        case "GET_DATA":{
            state={
                ...state,
                email:state.email=action.playload
            }
           break;
        }
       default:
    }
return state;
}