// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modals = createSlice({
    name: 'modals',
    initialState: {
        statusModal: false,
        selectedModal: 'MODAL_REGISTER_COMPANY'
    },
    reducers: {
        setStatusModal: (state, action) => {
            state.statusModal = action.payload;
        },
        setSelectedModal: (state, action) => {
            state.selectedModal = action.payload;
        },
        openModal: (state, action) => {
            state.selectedModal = action.payload;
            state.statusModal = true;
        },

    },
});

export const { setStatusModal, setSelectedModal, openModal } = modals.actions;
export default modals.reducer;
