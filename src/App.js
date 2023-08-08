import React, { useState, useEffect } from "react";
import Scoreboard from "./Components/ScoreBoard";
import GameClock from "./Components/GameClock";

function App() {
  const [quarterLength, setQuarterLength] = useState(12);
  const [currentQuarter, setCurrentQuarter] = useState(1);
  const [quarterEnd, setQuarterEnd] = useState(false);

  useEffect(() => {
    if (quarterEnd && currentQuarter < 4) {
      setCurrentQuarter(currentQuarter + 1);
      setQuarterEnd(false);
    }
  }, [quarterEnd, currentQuarter]);

  if (currentQuarter > 4) {
    return <div>Game Over!</div>;
  }

  return (
    <div className="App">
      <GameClock
        quarterLength={quarterLength}
        onQuarterEnd={() => setQuarterEnd(true)}
      />
      <Scoreboard onQuarterEnd={() => setQuarterEnd(true)} />
    </div>
  );
}

export default App;
