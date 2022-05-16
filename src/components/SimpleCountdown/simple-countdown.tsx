import React, { useState, useEffect, useRef } from "react";
import { calculateTimeLeft } from "../../utils";

const SimpleCountdown = ({ date }: { date: any }) => {
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

  return (
    <div className="countdown">
      {!isValidDate && <div>请输入一个正确的日期格式</div>}
      {isValidDate && timeLeft && (
        <div>
          {timeLeft.days} 天 {timeLeft.hours} 时 {timeLeft.minutes}{" "}
          分 {timeLeft.seconds} 秒
        </div>
      )}
    </div>
  );
};

export default SimpleCountdown;