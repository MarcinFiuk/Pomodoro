import { useState } from 'react';
import useTimer from './../../hooks/useTimer';
import fromSecToMin from '../../utils/fromSecToMin';
import TimerInput from './../Input/TimerInput';

const invalidChars = ['-', '+', 'e', 'E'];

const Timer = () => {
    const [pomodoro, setPomodoro] = useState(60);
    const [validatePomodoroInput, setValidatePomodoroInput] = useState(60);
    const [shortBreak, setShortBreak] = useState(10);
    const [validateShortBreakInput, setValidateShortBreakInput] = useState(10);
    const [longBreak, setLongBreak] = useState(20);
    const [validateLongBreakInput, setValidateLongBreakInput] = useState(20);

    const { timer, isRunning, setIsRunning } = useTimer(
        pomodoro,
        shortBreak,
        longBreak
    );

    const onChangeHandler = (e) => {
        if (invalidChars.includes(e.nativeEvent.data)) return;
        //NOTE: input accepts invalidChars as first element, e does not trigger
        let time = e.target.value;
        if (e.target.value > 60) time = 60;
        if (e.target.value < 0) time = 0;

        if (e.target.id === 'pomodoro') setValidatePomodoroInput(time);
        if (e.target.id === 'short break') setValidateShortBreakInput(time);
        if (e.target.id === 'long break') setValidateLongBreakInput(time);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        setPomodoro(validatePomodoroInput);
        setShortBreak(validateShortBreakInput);
        setLongBreak(validateLongBreakInput);
    };

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
    };

    const timeToDisplay = fromSecToMin(timer);

    const buttonStatus = isRunning ? 'Pause' : 'Start';

    return (
        <>
            <form onSubmit={submitHandler}>
                <TimerInput
                    label='pomodoro'
                    onChange={onChangeHandler}
                    value={validatePomodoroInput}
                />
                <TimerInput
                    label='short break'
                    onChange={onChangeHandler}
                    value={validateShortBreakInput}
                />
                <TimerInput
                    label='long break'
                    onChange={onChangeHandler}
                    value={validateLongBreakInput}
                />
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
