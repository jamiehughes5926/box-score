import React, { useEffect, useState } from "react";
import "./GameClock.css";

function GameClock({ quarterLength, onQuarterEnd }) {
  const [seconds, setSeconds] = useState(quarterLength * 60);
  const [isActive, setIsActive] = useState(false);

  function reset() {
    setSeconds(quarterLength * 60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds > 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        setIsActive(false);
        onQuarterEnd();
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, onQuarterEnd]);

  return (
    <div>
      <h2>Quarter Time Remaining:</h2>
      <h1>
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}
        {seconds % 60}
      </h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default GameClock;
