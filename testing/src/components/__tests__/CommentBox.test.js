import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapped
beforeEach(()=>{
    wrapped = mount(
    <Root>
        <CommentBox/>
    </Root>
    )
})

afterEach(()=>{
    wrapped.unmount()
})

it('should find textarea and button',()=>{
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);   
})

describe("textarea update",()=>{
    beforeEach(()=>{
        wrapped.find("textarea").simulate('change',{target:{value:'new comment'}})
        wrapped.update()
    })
    it('should call change event on textarea',()=>{
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
    })
    
    it('should submit the form',()=>{
        
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
    
        let event={preventDefault:function(){}}
        wrapped.find("form").simulate('submit',event)
        wrapped.update()
        expect(wrapped.find("textarea").prop("value")).toEqual("")
    })
})

