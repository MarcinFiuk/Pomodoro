import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { theme } from './../styles/theme';
import useTimer from './../../hooks/useTimer';
import fromSecToMin from '../../utils/fromSecToMin';
import ProgressBar from './../ProgressBar/ProgressBar';
import { setIndexOfActiveElement } from './../../redux/modalSlice';

const Timer = () => {
    const [reset, setReset] = useState(false);
    const startButton = useRef();
    const inputs = useSelector((state) => state.modal.inputs);
    const isModalOpen = useSelector((state) => state.modal.showModal);
    const dispatch = useDispatch();

    const { pomodoro, shortBreak, longBreak } = inputs;

    const { index, timer, timerTime, isRunning, setIsRunning } = useTimer(
        pomodoro * 60,
        shortBreak * 60,
        longBreak * 60
    );

    useEffect(() => {
        dispatch(setIndexOfActiveElement(index));
    }, [dispatch, index]);

    useEffect(() => {
        if (!isModalOpen) {
            startButton.current.focus();
        }
    }, [isModalOpen]);

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
            >
                <TimerWrapper>
                    <TimeStyled>{timeToDisplay}</TimeStyled>
                    <Button onClick={timerStartHandler} ref={startButton}>
                        {buttonStatus}
                    </Button>
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
    font-size: clamp(4.5rem, 12vw, 6.25rem);
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
