import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "../Reducer/CounterReducer";
import { fetchReducer } from "../Reducer/FetchDataReducer";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  fetchReducer: fetchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
// export const stores = createStore();
