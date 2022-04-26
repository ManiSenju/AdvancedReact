import { AUTH_ERR, AUTH_FORM } from "../actions/types"

const INI_STATE ={
    authenticated:'',
    errorMessage:''
}
export default function(state=INI_STATE,action){
    switch(action.type){
        case AUTH_FORM:
            return {...state,authenticated:action.payload}
        case AUTH_ERR:
            return {...state,errorMessage:action.payload}
        default:
            return state
    }
}