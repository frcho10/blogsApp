import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import blogsReducer , {BlogsInitialState} from "./reducers/blog";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [''],
}


const rootReducer: Reducer = combineReducers({
    blogs: blogsReducer,

});

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer);



export const store: ToolkitStore = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]

});

export const persistor = persistStore(store);
