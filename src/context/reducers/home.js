// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const home = createSlice({
    name: 'home',
    initialState: {
        selectedCategory: null,
        selectedTypeService: null
    },
    reducers: {
        setSelectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSelectedTypeService: (state, action) => {
            state.selectedTypeService = action.payload;
        },
    },
});

export const { setSelectCategory, setSelectedTypeService } = home.actions;
export default home.reducer;
