import tv4 from "tv4"
import schema from "./schema"

export default ({dispatch,getState}) => next => action=> {
    next(action)

    if(!tv4.validate(getState(),schema)){
        console.warn("Invalid Schema Detected")
    }  
}