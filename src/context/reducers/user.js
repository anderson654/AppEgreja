// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const { setUser, setToken } = user.actions;
export default user.reducer;
