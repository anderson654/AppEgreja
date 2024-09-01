// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setNullUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, setNullUser } = user.actions;
export default user.reducer;
