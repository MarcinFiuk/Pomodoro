import { useState, useEffect } from 'react';
import useInterval from './useInterval';

function useTimer(pomodoro, shortBreak, longBreak) {
    const intervalOrder = [
        pomodoro,
        shortBreak,
        pomodoro,
        shortBreak,
        pomodoro,
        shortBreak,
        pomodoro,
        longBreak,
    ];

    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(intervalOrder[index]);
    const [timerTime, setTimerTime] = useState(intervalOrder[index]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setIndex(0);
        setTimer(intervalOrder[0]);
        setTimerTime(intervalOrder[0]);
        setIsRunning(false);
    }, [pomodoro, shortBreak, longBreak]);

    const precision = 1; // In seconds
    const precisionInMs = precision * 1000;

    useInterval(
        () => {
            if (timer > 0) {
                return setTimer((prevTimer) => prevTimer - precision);
            }

            const newIndex = index === intervalOrder.length - 1 ? 0 : index + 1;

            setIndex(newIndex);
            setTimer(intervalOrder[newIndex]);
            setTimerTime(intervalOrder[newIndex]);
        },
        isRunning ? precisionInMs : null
    );

    return { index, timer, timerTime, isRunning, setIsRunning };
}

export default useTimer;
