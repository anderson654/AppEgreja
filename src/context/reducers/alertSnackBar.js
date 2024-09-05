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
        setAlert: (state, action) => {
            state.text = action.payload.text;
            state.type = action.payload.type;
            state.status = true;
        }
    },
});

export const { setStatus, setText, setType, setAlert } = snackBar.actions;
export default snackBar.reducer;
