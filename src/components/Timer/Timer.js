import React, { useEffect, useState } from "react";
import useInterval from "./../../hooks/useInterval";
import convertFromSecondToMinutes from "./../../utils/convertFromSecondToMinutes";

const TIMER_SHORT_BREAK = 5;
const TIMER_LONG_BREAK = 10;

function useTimer() {
  const [pomodoro, setPomodoro] = useState(20);

  const intervals = [
    pomodoro,
    TIMER_SHORT_BREAK,
    pomodoro,
    TIMER_SHORT_BREAK,
    pomodoro,
    TIMER_SHORT_BREAK,
    pomodoro,
    TIMER_LONG_BREAK,
  ];

  const [intervalIndex, setIntervalIndex] = useState(0);
  const [timer, setTimer] = useState(intervals[intervalIndex]);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    setIntervalIndex(0);
    setTimer(intervals[0]);
  }, [pomodoro]);

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

  return { timer, isPaused, setPaused, setPomodoro };
}

const Timer = () => {
  const [input, setInput] = useState(20);
  const { timer, isPaused, setPaused, setPomodoro } = useTimer();
  const timeToDisplay = convertFromSecondToMinutes(timer);

  const onChange = (event) => {
    const value = event.target.value.replace("e", "");
    const valueAsNumber = value ? parseInt(value, 10) : 0;

    setInput(Math.max(Math.min(valueAsNumber, 60), 0));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setPomodoro(input);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange} value={input} />
        <button type="submit">Update</button>
      </form>
      <p>{timeToDisplay}</p>
      <button onClick={() => setPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </button>
    </div>
  );
};

export default Timer;
