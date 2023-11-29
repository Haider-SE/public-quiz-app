import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "../features/login/loginSlice";
import thunk from 'redux-thunk';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
