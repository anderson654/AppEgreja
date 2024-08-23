// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuHomeSlice = createSlice({
    name: 'menuHome',
    initialState: {
        routeSelected: 'Home',
        subMenuIsOpen: false
    },
    reducers: {
        setRoute: (state, action) => {
            state.routeSelected = action.payload;
        },
        setSubMenu: (state, action) => {
            console.log(action);
            
            state.subMenuIsOpen = action.payload;
        },
    },
});

export const { setRoute, setSubMenu } = menuHomeSlice.actions;
export default menuHomeSlice.reducer;
