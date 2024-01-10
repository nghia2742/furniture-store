'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    isLogin: boolean
}

const initialState: UserState = {
    isLogin: false
}

export const userSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUserIsLoggedIn: (state, action) => {state.isLogin = action.payload},
    }
})

export const {setUserIsLoggedIn} = userSlice.actions;

export default userSlice.reducer;