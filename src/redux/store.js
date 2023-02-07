import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./slices";

const rootReducer = combineReducers({
    posts: postReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
