import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";
import reducers from './reducers'

export default function({children,initialState={}}){
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async,stateValidator)
        )
    return (
    <Provider store={store}>
        {children}
    </Provider>
)
    
}