import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import reducers from "../reducers";


export default function configureStore(){
    const store = createStore(reducers, applyMiddleware(logger, thunk));
    return store;
}