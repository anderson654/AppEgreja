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
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    },
});

export const { setPhone, setEmail } = login.actions;
export default login.reducer;
