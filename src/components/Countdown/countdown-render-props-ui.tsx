import React from "react";
import Countdown from "./countdown";

const CountdownRenderProps = ({ date }: {date: any}) => {
  return (
    <div className="countdown">
      <Countdown date={date}>
        {({ timeLeft, isValidDate }: {timeLeft: any, isValidDate: boolean}) => (
          <>
            {!isValidDate && <div>Pass in a valid date props</div>}
            {isValidDate && (
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
          </>
        )}
      </Countdown>
    </div>
  );
};

export default CountdownRenderProps;