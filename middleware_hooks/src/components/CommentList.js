import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions'

const CommentList = props=>{
    const renderComments = ()=> props.comments.map(c=><li key={c}>{c}</li>)
    return(
        <div>
            <h4>Comments List</h4>
            <ul>{renderComments()}</ul>
        </div>
    )
}
function mapStateToProps(state){
    return {comments:state.comments}
}

export default connect(mapStateToProps)(CommentList)