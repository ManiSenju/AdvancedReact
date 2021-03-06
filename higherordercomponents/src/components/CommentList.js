import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions'

class CommentList extends Component{
    renderComments(){
        return this.props.comments.map((comment)=>{
            return (<li key={comment}>{comment}</li>)
        })
    }

    render(){
        return(
            <div>
                <h4>Comments List</h4>
                <ul>{this.renderComments()}</ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {comments:state.comments}
}

export default connect(mapStateToProps)(CommentList)