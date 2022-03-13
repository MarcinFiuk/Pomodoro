import { useState } from 'react';
import useInterval from './useInterval';

function useTimer(intervalOrder) {
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(intervalOrder[index]);
    const [isRunning, setIsRunning] = useState(false);

    useInterval(
        () => {
            if (timer > 0) {
                return setTimer((prevTimer) => prevTimer - 1);
            }

            const newIndex = index === intervalOrder.length - 1 ? 0 : index + 1;

            setIndex(newIndex);
            setTimer(intervalOrder[newIndex]);
        },
        isRunning ? 100 : null
    );

    return { timer, isRunning, setIsRunning };
}

export default useTimer;
