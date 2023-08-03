import { useEffect, useState } from "react";

const useCountdown = (secondsLeft: number, generatedAt: string) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (minutes == 0 && seconds == 0) {
      setMinutes(Math.floor(secondsLeft / 60));
      setSeconds(secondsLeft % 60);
    }
  }, [generatedAt]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return { minutes, seconds };
};

export default useCountdown;
