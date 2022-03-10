import React, { useState, useReducer, useEffect } from 'react';
import useInterval from './../../hooks/useInterval';
import convertFromSecondToMinutes from './../../utils/convertFromSecondToMinutes';
import { ACTIONS } from './../../utils/actions';

const initialState = {
    pomodoro: 20,
    shortBreak: 5,
    longBreak: 10,
};

const intervalOrder = [
    'pomodoro',
    'shortBreak',
    'pomodoro',
    'shortBreak',
    'pomodoro',
    'shortBreak',
    'pomodoro',
    'longBreak',
];

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.POMODORO:
            return { ...state, pomodoro: state.pomodoro - 1 };
        case ACTIONS.SHORTBREAK:
            return { ...state, shortBreak: state.shortBreak - 1 };
        case ACTIONS.LONGBREAK:
            return { ...state, longBreak: state.longBreak - 1 };
        case ACTIONS.RESET:
            return initialState;
        default:
            return state;
    }
};

const Timer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [delay] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalElement, setIntervalElement] = useState(0);

    const actualRunningTimer = intervalOrder[intervalElement];

    useEffect(() => {
        intervalElement === intervalOrder.length && setIntervalElement(0);

        if (state[actualRunningTimer] <= 0) {
            dispatch({ type: ACTIONS.RESET });
            setIntervalElement((prev) => prev + 1);
        }
    }, [state, actualRunningTimer, intervalElement]);

    useInterval(
        () => {
            dispatch({ type: ACTIONS[actualRunningTimer.toUpperCase()] });
        },
        isRunning ? delay : null
    );

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
    };

    const timeToDisplay = convertFromSecondToMinutes(
        state[intervalOrder[intervalElement]]
    );

    return (
        <div>
            <p>{timeToDisplay}</p>
            <button onClick={timerStartHandler}>Start</button>
        </div>
    );
};

export default Timer;
