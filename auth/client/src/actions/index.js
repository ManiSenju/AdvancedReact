import axios from "axios"
import { AUTH_ERR, AUTH_FORM } from "./types"

export const signup = (formProps,callback)=> async dispatch =>{
    try {
        const response = await axios.post('http://localhost:3090/signup',formProps)
        dispatch({
            type:AUTH_FORM,
            payload:response.data.token
        })
        callback()
        localStorage.setItem('token',response.data.token)  
    } catch (error) {
        dispatch({
            type:AUTH_ERR,
            payload: 'Email already exists'
        })
    }
    
}

export const signout = ()=>{
    localStorage.removeItem('token')
    return {
        type:AUTH_FORM,
        payload: ''
    }
}

export const signin = (formProps,callback) => async dispatch =>{
    try {
        const response = await axios.post('http://localhost:3090/signin',formProps)
        dispatch({
            type:AUTH_FORM,
            payload:response.data.token
        })
        callback()
        localStorage.setItem('token',response.data.token)  
    } catch (error) {
        dispatch({
            type:AUTH_ERR,
            payload: 'Invalid Login Credentials'
        })
    }
}
