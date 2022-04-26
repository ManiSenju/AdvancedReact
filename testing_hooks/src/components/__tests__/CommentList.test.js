import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentsList";
import Root from "../../Root";

let wrapped
beforeEach(()=>{
    const initialState ={
        comments:['comment1','comment2']
    }
    wrapped = mount(
        <Root initialState={initialState} ><CommentList/></Root>
    )
})

it('should create one li per comment',()=>{
    expect(wrapped.find('li').length).toEqual(2)
})

it('should check for text',()=>{
    expect(wrapped.render().text()).toContain('comment1')
    expect(wrapped.render().text()).toContain('comment2')
})