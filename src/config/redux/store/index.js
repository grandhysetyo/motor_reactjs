import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from '../reducer/index.js';

export const store = createStore(reducer, applyMiddleware(thunk));