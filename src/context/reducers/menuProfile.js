// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuHomeProfile = createSlice({
    name: 'menuProfile',
    initialState: {
        menuProfileIsOpen: false
    },
    reducers: {
        setMenuProfile: (state, action) => {
            state.menuProfileIsOpen = action.payload;
        },
    },
});

export const { setMenuProfile } = menuHomeProfile.actions;
export default menuHomeProfile.reducer;
