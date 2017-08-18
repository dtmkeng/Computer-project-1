import React, { Component } from 'react';
import LoginPage from './Login'
import SignUP from './Signup'
import User from './User';
import UserInfo from './UserInfo'
import {Route} from 'react-router-dom';
class MainPage extends Component {
    render() {
        return (
            <div>
                 <Route exact path='/' component={LoginPage}/>
                 <Route path='/login' component={LoginPage}/>
                 <Route path='/signup' component={SignUP}/>
                 <Route path='/user' component={User}/>
                 <Route path='/info' component={UserInfo}/>
            </div>
        );
    }
}
export default MainPage;