import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from '../actions';

const App = props =>{
    const renderHeader = ()=>{
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {renderButton()}
                </li>
            </ul>
        )
    }
    const renderButton=()=>{
        const updateAuthState=()=>{
            if(props.isLoggedIn){
                props.changeAuth(false)
            }else{
                props.changeAuth(true)
            }
        }
        return (
            <button onClick={updateAuthState}>{props.isLoggedIn ? 'Sign Out':'Sign In'}</button>
        )
    }
    return (
        <div>
            {renderHeader()}
            <Route path="/post" component={CommentBox}/>
            <Route path="/" exact component={CommentList}/>
        </div>
    )
}
function mapStateToProps(state){
    return {
        isLoggedIn: state.auth
    }
}

export default connect(mapStateToProps,actions)(App)