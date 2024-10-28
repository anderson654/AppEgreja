import { createSlice } from '@reduxjs/toolkit';

const defaultConsts = createSlice({
    name: 'defaultConsts',
    initialState: {
        states: null,
        cities: null,
    },
    reducers: {
        setStates: (state, action) => {
            state.states = action.payload;
        },
        setCities: (state, action) => {
            state.cities = action.payload;
        },
    },
});

export const { setStates, setCities } = defaultConsts.actions;
export default defaultConsts.reducer;
