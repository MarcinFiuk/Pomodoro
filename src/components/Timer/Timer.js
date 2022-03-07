import React, { useState, useEffect } from 'react';
import useInterval from './../../hooks/useInterval';

const Timer = () => {
    const [time, setTime] = useState({
        pomodoro: 3600,
        shortBreak: 100,
        longBreak: 1000,
    });
    const [delay] = useState(1000);
    const [isRunning, setIsRunning] = useState(false);

    useInterval(
        () => {
            setTime({ ...time, pomodoro: time.pomodoro - 1 });
        },
        isRunning ? delay : null
    );

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
    };

    return (
        <div>
            <p>{time.pomodoro}</p>
            <p>{time.pomodoro}</p>
            <button onClick={timerStartHandler}>Start</button>
        </div>
    );
};

export default Timer;
