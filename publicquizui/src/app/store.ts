import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from'redux';
import loginReducer from "../features/login/loginSlice";
import thunk from 'redux-thunk';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  login: loginReducer,
});

const persistedLoginReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
  },
  middleware:[thunk]
});

export const persistor = persistStore(store); // Create persistor
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
