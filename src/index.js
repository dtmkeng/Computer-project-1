import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import {thunk} from 'redux-thunk'
import { Provider } from 'react-redux'
const mylogger = (store) => (next) => (action) => {
    console.log("Log action", action);
    next(action);
}
const store = createStore(rootReducer, {}, applyMiddleware(mylogger));
store.subscribe(() => {
    console.log("Udate Store", store.getState());
});
ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <App /> 
</Provider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
