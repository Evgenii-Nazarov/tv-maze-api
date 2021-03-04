import { createStore, applyMiddleware } from "redux";
import movies from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'

const createRootReducer = (history) => combineReducers({
    movies,
    router: connectRouter(history),
})

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk)));

export default store;

