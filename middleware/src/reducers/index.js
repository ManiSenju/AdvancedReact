import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";
import AuthReducer from './auth';

export default combineReducers({
    comments:CommentsReducer,
    auth:AuthReducer
})