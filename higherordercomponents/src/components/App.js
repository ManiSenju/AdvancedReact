import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from '../actions';

class App extends Component{

    renderHeader(){
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    renderButton(){
        const updateAuthState=()=>{
            if(this.props.isLoggedIn){
                this.props.changeAuth(false)
            }else{
                this.props.changeAuth(true)
            }
        }
        return (
            <button onClick={updateAuthState}>{this.props.isLoggedIn ? 'Sign Out':'Sign In'}</button>
        )
    }

    render(){
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
    
}
function mapStateToProps(state){
    return {
        isLoggedIn: state.auth
    }
}

export default connect(mapStateToProps,actions)(App)