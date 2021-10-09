import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

//reducers
import {getItemDetailsReducer,getItemReducer} from "./reducers/itemReducers";

const reducer = combineReducers({
    getItems: getItemReducer,
    getItemDetails: getItemDetailsReducer 
});

const middleWere = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWere))
);

export default store;