import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Users,INC}from '../action/userAction'
const mapStateToProp=(state)=>{
    return{
       name:state.user.name,
       value:state.user.value
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {User:bindActionCreators(Users,dispatct),
          INC:bindActionCreators(INC,dispatct)
  }
}
class InitTable extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(InitTable);