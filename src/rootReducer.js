import {combineReducers}from 'redux'
import user from './Reducer/user';
import User from './Reducer/UserReducer'
export default combineReducers({
    user,
    User
})