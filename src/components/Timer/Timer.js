import { useState } from 'react';
import useTimer from './../../hooks/useTimer';
import fromSecToMin from '../../utils/fromSecToMin';
import TimerInput from './../Input/TimerInput';

const Timer = () => {
    const [pomodoro, setPomodoro] = useState(60);
    const [shortBreak, setShortBreak] = useState(10);
    const [longBreak, setLongBreak] = useState(20);

    const { timer, isRunning, setIsRunning } = useTimer(
        pomodoro,
        shortBreak,
        longBreak
    );

    const submitHandler = (e) => {
        e.preventDefault();

        const pomodoroTime = parseInt(e.target['pomodoro'].value);
        const shortBreakTime = parseInt(e.target['short break'].value);
        const longBreakTime = parseInt(e.target['long break'].value);

        setPomodoro(pomodoroTime);
        setShortBreak(shortBreakTime);
        setLongBreak(longBreakTime);
    };

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
    };

    const timeToDisplay = fromSecToMin(timer);

    const buttonStatus = isRunning ? 'Pause' : 'Start';

    return (
        <>
            <form onSubmit={submitHandler}>
                <TimerInput label='pomodoro' />
                <TimerInput label='short break' />
                <TimerInput label='long break' />
                <button type='submit'>Submit</button>
            </form>
            <div>
                <p>{timeToDisplay}</p>
                <button onClick={timerStartHandler}>{buttonStatus}</button>
            </div>
        </>
    );
};

export default Timer;
