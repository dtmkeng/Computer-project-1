import {get} from '../config/connect'
import * as firebase from 'firebase';
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
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    state={
                        ...state,
                        id:state.id=user.uid
                    }
                } else {
                }
              });
           break;
        }
       default:
    }
return state;
}