import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { theme } from './../styles/theme';
import useTimer from './../../hooks/useTimer';
import fromSecToMin from '../../utils/fromSecToMin';
import TimerInput from './../Input/TimerInput';
import ProgressBar from './../ProgressBar/ProgressBar';

const Timer = ({ dynamicColor }) => {
    const inputs = useSelector((state) => state.modal.inputs);
    const [reset, setReset] = useState(false);

    const { pomodoro, shortBreak, longBreak } = inputs;

    const { timer, timerTime, isRunning, setIsRunning } = useTimer(
        pomodoro * 60,
        shortBreak * 60,
        longBreak * 60
    );

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
        setReset(false);
    };

    const timeToDisplay = fromSecToMin(timer.toFixed());

    const buttonStatus = isRunning ? 'Pause' : 'Start';

    return (
        <>
            <ProgressBar
                timerEnd={timerTime}
                reset={reset}
                pause={!isRunning}
                timer={timer}
                dynamicColor={dynamicColor}
            >
                <TimerWrapper>
                    <TimeStyled>{timeToDisplay}</TimeStyled>
                    <Button onClick={timerStartHandler}>{buttonStatus}</Button>
                </TimerWrapper>
            </ProgressBar>
        </>
    );
};

const TimerWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.color.textFirst};
`;

const TimeStyled = styled.span`
    font-size: clamp(5rem, 12vw, 6.25rem);
    /* font-weight: 400; */
    line-height: clamp(6.25rem, 13vw, 7, 75rem);
    letter-spacing: -4px;
`;

const Button = styled.button`
    font-size: clamp(0.875rem, 3vw, 1rem);
    border: none;
    background: none;
    line-height: clamp(1em, 3vw, 1.25em);
    letter-spacing: 1rem;
    color: inherit;
    padding: 0;
`;

export default Timer;
