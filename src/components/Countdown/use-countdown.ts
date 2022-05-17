import React, { useState, useEffect, useRef  } from "react";
import { calculateTimeLeft } from "../../utils";

const useCountdown= ({ date }: { date: any}) => {
  const initialTimeLeft = calculateTimeLeft(date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef<undefined | ReturnType<typeof setInterval>
  >(undefined);

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);

  let isValidDate = true;
  if (timeLeft === null) isValidDate = false;
  return {
      isValidDate,
      timeLeft
    }
  
};

export default useCountdown;