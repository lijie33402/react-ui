import React, { useState, useEffect, useRef  } from "react";
import { calculateTimeLeft } from "../../utils";
interface CountdownProps {
  date: any,
  children: any
}
const Countdown:React.FC<CountdownProps> = ({ date, children }) => {
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
  // 这里通过使用chidren的props
  return children({
      isValidDate,
      timeLeft
    })
  
};

export default Countdown;