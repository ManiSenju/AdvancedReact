import {SAVE_COMMENT} from '../types'
import {saveComment} from '../index'

describe('saveComment',()=>{
    it('should create save comment action creator',()=>{
        const saveAction = saveComment('new comment')
        expect(saveAction.type).toEqual(SAVE_COMMENT)
        expect(saveAction.payload).toEqual('new comment')
    })
})
