//Store- Object that managing all
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import config from "../Services/Config";
import { authReducer } from "./AuthState";
import { productsReducer } from "./ProductsState";

const reducers = combineReducers({
    // renaming the reducer to make more sense at the usage
    productsState: productsReducer,
    authState:authReducer
    // put all the reducers in here
});

const store = createStore(reducers, config.isDevelopment ? composeWithDevTools() : undefined);
export default store;