import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'
import {Provider} from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const allReducers = combineReducers(
    {
        products: productsReducer,
        user: userReducer
    }
)


//assign default values to reducers on init
const defaultProducts = [{'name': 'iPhone 6'}]
const defaultUser = 'Guest'
const store = createStore(
    allReducers, 
    //assign default values to reducers
    {
            products: defaultProducts,
            user: defaultUser
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    console.log( store.getState() )


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
