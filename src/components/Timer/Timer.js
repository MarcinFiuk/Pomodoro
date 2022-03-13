import useTimer from './../../hooks/useTimer';
import fromSecToMin from '../../utils/fromSecToMin';

const POMODORO = 10;
const SHORT_BREAK = 5;
const LONG_BREAK = 20;

const intervalOrder = [
    POMODORO,
    SHORT_BREAK,
    POMODORO,
    SHORT_BREAK,
    POMODORO,
    SHORT_BREAK,
    POMODORO,
    LONG_BREAK,
];

const Timer = () => {
    const { timer, isRunning, setIsRunning } = useTimer(intervalOrder);

    const timerStartHandler = () => {
        setIsRunning((prev) => !prev);
    };

    const timeToDisplay = fromSecToMin(timer);

    const buttonStatus = isRunning ? 'Pause' : 'Start';

    return (
        <div>
            <p>{timeToDisplay}</p>
            <button onClick={timerStartHandler}>{buttonStatus}</button>
        </div>
    );
};

export default Timer;
