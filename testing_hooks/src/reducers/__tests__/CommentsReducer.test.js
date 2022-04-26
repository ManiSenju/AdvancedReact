import CommentsReducer from "../CommentsReducer";
import { SAVE_COMMENT } from "../../actions/types";

it('should handle save comment action type',()=>{
    const action ={
        type:SAVE_COMMENT,
        payload:"new comment"
    }
    const newState = CommentsReducer([],action)
    expect(newState.length).toEqual(1)
    expect(newState[0]).toEqual("new comment")
})

it('should handle unknown action types',()=>{
    const newState = CommentsReducer([],{type:"ff"})
    expect(newState).toEqual([]);
})