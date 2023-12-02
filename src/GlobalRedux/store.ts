// @/app/GlobalRedux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import localForage from "localforage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./features/user/userSlice"
import tokenReducer from "./features/token/tokenSlice"


// Redux-Persist için yapılandırma
const persistConfig = {
  key: "root", // Depolama anahtarını belirtin
  storage: localForage, // localForage'i kullanarak depolama seçin
  whitelist: ["user","token"], // Kalıcı hale getirmek istediğiniz sliceleri belirtin
};

const rootReducer = combineReducers({
    user: userReducer,
    token: tokenReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
