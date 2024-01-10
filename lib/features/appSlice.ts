'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
    toast: {
        status: boolean;
        type: string;
        message: string;
    };
}

const initialState: AppState = {
    toast: {
        status: false,
        type: '',
        message: '',
    }
};

export const appSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setToast: (state, action) => {
            const { status, type, message } = action.payload;
            state.toast.status = status;
            state.toast.type = type;
            state.toast.message = message ? message : '';
        },
    },
});

export const { setToast } = appSlice.actions;

export default appSlice.reducer;
