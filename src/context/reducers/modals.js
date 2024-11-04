// src/reducers/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modals = createSlice({
    name: 'modals',
    initialState: {
        statusModal: false,
        selectedModal: 'MODAL_REGISTER_COMPANY',
        data: null,
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
        setVariablesModal: (state, action) => {
            state.variables = action.payload;
        },
        newOpenModal: (state, action) => {
            state.selectedModal = action.payload.name;
            state.data = action.payload.data;
            state.statusModal = true;
        },
        closeModal: (state, action) => {
            state.selectedModal = null;
            state.data = null;
            state.statusModal = false;
        },

    },
});

export const { setStatusModal, setSelectedModal, openModal, setVariablesModal, newOpenModal, closeModal } = modals.actions;
export default modals.reducer;
