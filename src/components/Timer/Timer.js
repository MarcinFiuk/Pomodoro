import React, { useState } from "react";
import useInterval from "./../../hooks/useInterval";
import convertFromSecondToMinutes from "./../../utils/convertFromSecondToMinutes";

const TIMER_POMODORO = 20;
const TIMER_SHORT_BREAK = 5;
const TIMER_LONG_BREAK = 10;

const intervals = [
  TIMER_POMODORO,
  TIMER_SHORT_BREAK,
  TIMER_POMODORO,
  TIMER_SHORT_BREAK,
  TIMER_POMODORO,
  TIMER_SHORT_BREAK,
  TIMER_POMODORO,
  TIMER_LONG_BREAK,
];

function useTimer() {
  const [intervalIndex, setIntervalIndex] = useState(0);
  const [timer, setTimer] = useState(intervals[intervalIndex]);
  const [isPaused, setPaused] = useState(false);

  useInterval(
    () => {
      if (timer > 0) {
        return setTimer(timer - 1);
      }

      const newIntervalIndex =
        intervalIndex === intervals.length - 1 ? 0 : intervalIndex + 1;

      setIntervalIndex(newIntervalIndex);
      setTimer(intervals[newIntervalIndex]);
    },
    isPaused ? null : 100
  );

  return { timer, isPaused, setPaused };
}

const Timer = () => {
  const { timer, isPaused, setPaused } = useTimer();
  const timeToDisplay = convertFromSecondToMinutes(timer);

  return (
    <div>
      <p>{timeToDisplay}</p>
      <button onClick={() => setPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </button>
    </div>
  );
};

export default Timer;
