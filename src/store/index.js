import { createStore, compose } from "redux";
import reducer from "./reducer";

// redux-devtools advanced store setup https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());
export default store;
