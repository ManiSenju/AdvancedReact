import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentsList from "../CommentsList";

let wrapped;
beforeEach(()=>{
    wrapped = shallow(<App/>)
})

it('should render commentbox component',()=>{
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('should show commentlist component',()=>{
    expect(wrapped.find(CommentsList).length).toEqual(1);
})