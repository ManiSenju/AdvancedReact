import React, { Component } from "react";
import { reduxForm,Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from '../../actions'
import { compose } from "redux";

class Signup extends Component{
    onSubmit =(formProps)=>{
        this.props.signup(formProps,()=>{
            this.props.history.push('/feature')
        })
    }
    
    render(){
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field 
                        type="text"
                        name="email"
                        component="input"
                        autoComplete="off"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        type="password"
                        name="password"
                        component="input"
                        autoComplete="off"
                    />
                </fieldset>
                <button>Sign Up</button>
                <div>{this.props.errorMessage}</div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {errorMessage:state.auth.errorMessage}
}

export default compose(
    connect(mapStateToProps,actions),
    reduxForm({form:'signup'})
)(Signup)
