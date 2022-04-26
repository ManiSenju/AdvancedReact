import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";

export default combineReducers({
    comments:CommentsReducer
})