import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import {bindActionCreators} from 'redux'
import { Users,INC,GET_DATA,UID}from '../action/userAction'
import { get, ref} from '../config/connect'
const mapStateToProp=(state)=>{
    return{
       name:state.user.name,
       id:state.User.id,
       email:state.User.email
    }
}
const mapDispatchToProp=(dispatct)=>{
    
  return {User:bindActionCreators(Users,dispatct),
          GETdata:bindActionCreators(GET_DATA,dispatct),
          Uid:bindActionCreators(UID,dispatct)
  }
}
var p=[];
class InitTable extends Component {
    constructor(){
      super();
      this.state={
          user:'',
          email:'',
          study:'',
          id:''
  
      }
 }

componentDidMount(){
    if (!this.props.id) {

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              p.push(user.uid);
            } else {
              // No user is signed in.
            }
          });
          this.props.Uid(p[0]);
          //p=[];
          get.ref(`/users/${this.props.id}`).once('value').then(function(snap){
            var data =snap.val();
            return data;
        });
    
      }else{ 
        get.ref(`/users/${this.props.id}`).once('value').then(function(snap){
            var data =snap.val();
            return data;
        }).then((data)=>{
            this.props.GETdata();
        });
            //console.log(this.state.email)
           p=[];
       }

    
   
}
    render() {
        return (
            <div>
                value: {this.props.id}<p></p>
                State: {this.state.id}
                <p>Email: {this.props.email}</p>
            </div>
        );
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(InitTable);