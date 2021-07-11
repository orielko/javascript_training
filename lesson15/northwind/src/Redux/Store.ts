//Store- Object that managing all
import { combineReducers, createStore } from "redux";
import { productsReducer } from "./ProductsState";

const reducers = combineReducers({
    // renaming the reducer to make more sense at the usage
    productsState: productsReducer
    // put all the reducers in here
});

const store = createStore(reducers);
export default store;