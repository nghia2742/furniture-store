'use client';

import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./features/appSlice";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        product: productReducer
    }
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;