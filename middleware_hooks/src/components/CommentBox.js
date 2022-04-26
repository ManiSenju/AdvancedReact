import React, { useState } from "react";
import {connect} from 'react-redux'
import * as actions from '../actions'
import requireAuth from "./requireAuth";

const CommentBox = props=>{
    const [comment, setComment] = useState('');

    const handleChange = e => setComment(e.target.value)

    const handleSubmit =e=>{
        e.preventDefault();
        props.saveComment(comment)
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={comment} onChange={handleChange}/>
                <div>
                    <button className="submit-comment">Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comment" onClick={props.fetchComments}>Fetch Comments</button>
        </div>
    )
}

export default connect(null,actions)(requireAuth(CommentBox))