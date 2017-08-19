import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UserInfo extends Component {
    render() {
        return (
            <div className='container' style={{paddingTop:30}}>
                <h1 className='title is-1'>สร้าง account  เสร็จเเล้ว!!!!</h1>
                <Link to='/user/about'><a className="button is-success">My Account</a></Link>
            </div>
        );
    }
}
export default UserInfo;