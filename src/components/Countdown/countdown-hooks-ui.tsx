import React from "react";
import useCountdown from "./use-countdown";

const CountdownHooksUi = ({ date }: {date: any}) => {
  const { timeLeft, isValidDate } = useCountdown(date);
  return (
    <div className="countdown">
      {!isValidDate && <div>Pass in a valid date props</div>}
      {isValidDate && timeLeft && (
        <div>
          <strong className="countdown-header">{timeLeft.days} days </strong>
          <strong className="countdown-header">
            {timeLeft.hours} hours{" "}
          </strong>
          <strong className="countdown-header">
            {timeLeft.minutes} minutes{" "}
          </strong>
          <strong className="countdown-header">{timeLeft.seconds} seconds</strong>
        </div>
      )}
    </div>
  );
};

export default CountdownHooksUi;