// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cacheServices = createSlice({
    name: 'cacheServices',
    initialState: {
        servicesCategoryAndType: {}
    },
    reducers: {
        setServicesCategoryAndType: (state, action) => {
            state.servicesCategoryAndType = {
                ...state.servicesCategoryAndType,
                [`CategoryId${action.payload.categoryId}TypeId${action.payload.typeId}`]: action.payload.data

            };
        },
    },
});

export const { setServicesCategoryAndType } = cacheServices.actions;
export default cacheServices.reducer;
