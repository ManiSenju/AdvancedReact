import React from "react";
import { connect } from "react-redux";

const CommentList = props=>{
    const renderComments = ()=>{
        return props.comments.map(comment => <li key={comment}>{comment}</li>)
    }
    return (
        <React.Fragment>
            <h4>Comments List</h4>
            <ul>{renderComments()}</ul>
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return {
        comments:state.comments
    }
}

export default connect(mapStateToProps)(CommentList);