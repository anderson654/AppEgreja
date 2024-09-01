import { createSlice } from '@reduxjs/toolkit';

const snackBar = createSlice({
    name: 'alertSnackBar',
    initialState: {
        status: false,
        text: '',
        type: 'sucess',
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { setStatus, setText, setType } = snackBar.actions;
export default snackBar.reducer;
