import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../components/App"
import Root from "../../src/Root";

beforeEach(()=>{
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:"fetch1"},{name:"fetch2"}]
    })
})

afterEach(()=>{
    moxios.uninstall()
})

it('should render the complete app and fetch 500 comments lis',(done)=>{
    const wrapped = mount(<Root><App/></Root>)
    wrapped.find(".fetch-comment").simulate('click')
    moxios.wait(()=>{
        wrapped.update()
        expect(wrapped.find("li").length).toEqual(2)
        done()
        wrapped.unmount()
    })
})