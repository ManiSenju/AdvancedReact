import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/app";
import Welcome from "./components/Welcome.js"
import Signup from './components/auth/Signup.js'
import Feature from "./components/Feature";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from 'redux-thunk'
import reducers from "./reducers";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
    reducers,
    {
        auth:{
            authenticated:localStorage.getItem('token')
        }
    },
    applyMiddleware(reduxThunk)
    )
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/signout' component={Signout}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/feature' component={Feature}/>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)