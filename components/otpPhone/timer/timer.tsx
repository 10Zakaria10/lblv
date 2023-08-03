import React from "react";
import { CountDownLabel } from "./style";

interface ITimer {
  minutes: number;
  seconds: number;
}
const Timer: React.FC<ITimer> = ({ minutes, seconds }) => {
  return (
    <CountDownLabel>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </CountDownLabel>
  );
};

export default Timer;
