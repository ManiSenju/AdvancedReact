import {SAVE_COMMENT,FETCH_COMMENTS} from '../types'
import {saveComment,fetchComments} from '../index'
import axios from 'axios';

describe('saveComment',()=>{
    it('should create save comment action creator',()=>{
        const saveAction = saveComment('new comment')
        expect(saveAction.type).toEqual(SAVE_COMMENT)
        expect(saveAction.payload).toEqual('new comment')
    })
})

describe('fetchComment',()=>{
    
    it('should fetchComments',()=>{
        const axiosSpy = jest.spyOn(axios,'get').mockImplementation(()=>{
            return {
                status:200,
                response:[{name:"fetch1"},{name:"fetch2"}]
            }
        });
        const fetchAction = fetchComments()
        expect(fetchAction.type).toEqual(FETCH_COMMENTS);
        expect(axiosSpy).toHaveBeenCalled();
        expect(axiosSpy.mock.calls[0][0]).toEqual('http://jsonplaceholder.typicode.com/comments');
    })
})
