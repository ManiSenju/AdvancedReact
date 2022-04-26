import { mount } from "enzyme";
import moxios from "moxios";
import React from "react";
import App from "../components/App";
import Root from '../Root';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:"fetch1"},{name:"fetch2"}]
    })
})

afterEach(()=>{
    moxios.uninstall()
})

it('should render complete app and fetch comments from jsonplaceholder api',(done)=>{
    const wrapped = mount(<Root><App/></Root>);
    wrapped.find('.fetch-comment').simulate('click');
    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    })
})