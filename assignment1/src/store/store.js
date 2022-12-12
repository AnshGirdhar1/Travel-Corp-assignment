import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { postReducer } from "./posts/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
