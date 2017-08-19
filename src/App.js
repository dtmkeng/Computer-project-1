import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import  MainPage from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <MainPage/>
      </div>
    );
  }
}
/*
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
}*/
export default App;
