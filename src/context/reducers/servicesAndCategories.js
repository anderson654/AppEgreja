// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const servicesAndCategories = createSlice({
    name: 'servicesAndCategories',
    initialState: {
        categories: null
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = servicesAndCategories.actions;
export default servicesAndCategories.reducer;
