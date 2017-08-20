import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Users,INC,GET_DATA}from '../action/userAction'
import { get } from '../config/connect'
const mapStateToProp=(state)=>{
    return{
       name:state.user.name,
       id:state.User.id
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {User:bindActionCreators(Users,dispatct),
          GETdata:bindActionCreators(GET_DATA,dispatct)
  }
}

class AboutTable extends Component {
    constructor(){
        super();
        this.state={
            user:'',
            email:'',
            study:'',
        }
      }
  componentDidMount(){
      get.ref(`/users/${this.props.id}`).once('value').then(function(snap){
          var data =snap.val();
          return data;
      }).then((data)=>{
          this.setState({
             user:data.username,
             email:data.email,
             study:data.study,
          })
          console.log(this.state.email);
      }).then(()=>{
         this.props.GETdata(this.state.email);
      })
    }
    render() {
        return (
           <div >
                AboutTable
            </div>
        );
    }

}
export default connect(mapStateToProp,mapDispatchToProp)(AboutTable);