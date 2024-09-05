// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const login = createSlice({
    name: 'login',
    initialState: {
        phone: null,
        email: null,
    },
    reducers: {
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setEmail: (state) => {
            state.email = null;
        }
    },
});

export const { setPhone } = login.actions;
export default login.reducer;
