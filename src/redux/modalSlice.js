import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    font: 'kumbhSans',
    bgcColor: 'decorationFirst',
    inputs: {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
    },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.showModal = true;
        },
        closeModal: (state) => {
            state.showModal = false;
        },
        setFont: (state, action) => {
            state.font = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setInputs: (state, action) => {
            state.inputs = action.payload;
        },
    },
});

export const { openModal, closeModal, setFont, setColor, setInputs } =
    modalSlice.actions;

export default modalSlice.reducer;
