// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuHomeSlice = createSlice({
    name: 'menuHome',
    initialState: {
        routeSelected: 'Home',
        subMenuIsOpen: false,
        selectedCategory: null
    },
    reducers: {
        setRoute: (state, action) => {
            state.routeSelected = action.payload;
        },
        setSubMenu: (state, action) => {
            state.subMenuIsOpen = action.payload;
        },
        setSelectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setRoute, setSubMenu, setSelectCategory } = menuHomeSlice.actions;
export default menuHomeSlice.reducer;
