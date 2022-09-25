import { combineReducers } from "redux";
import { default as userSlice } from "./features/userSlice";
import { default as appApi } from "./services/appApi";

// persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [appApi.reducerPath],
};

const perstedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: perstedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
