import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    indexOfActiveElement: 0,
    font: 'kumbhSans',
    bgcColor: 'decorationFirst',
    inputs: {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
    },
    temporary: {},
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
            state.temporary = {};
        },
        setFont: (state, action) => {
            state.temporary.font = action.payload;
        },
        setColor: (state, action) => {
            state.temporary.bgcColor = action.payload;
        },
        setInputs: (state, action) => {
            state.temporary.inputs = {
                ...state.temporary.inputs,
                ...action.payload,
            };
        },
        setFinalProperties: (state, action) => {
            return (state = { ...state, ...action.payload });
        },
        setIndexOfActiveElement: (state, action) => {
            state.indexOfActiveElement = action.payload;
        },
    },
});

export const {
    openModal,
    closeModal,
    setFont,
    setColor,
    setInputs,
    setFinalProperties,
    setIndexOfActiveElement,
} = modalSlice.actions;

export default modalSlice.reducer;
