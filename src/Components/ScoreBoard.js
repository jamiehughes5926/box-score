import React, { useState } from "react";
import "./ScoreBoard.css";

function Scoreboard({ onQuarterEnd }) {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [quarters, setQuarters] = useState([]);

  const endQuarter = () => {
    setQuarters([...quarters, { teamAScore, teamBScore }]);
    setTeamAScore(0);
    setTeamBScore(0);
    onQuarterEnd();
  };

  return (
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Team A Score</th>
            <th>Team B Score</th>
          </tr>
        </thead>
        <tbody>
          {quarters.map((quarter, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{quarter.teamAScore}</td>
              <td>{quarter.teamBScore}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="team">
        <h2>Team A</h2>
        <p className="score">{teamAScore}</p>
        <div className="buttons">
          <button onClick={() => setTeamAScore(teamAScore + 1)}>
            Free throw
          </button>
          <button
            className="decrease"
            onClick={() => setTeamAScore(teamAScore - 1)}
          >
            Decrease 1
          </button>
          <button onClick={() => setTeamAScore(teamAScore + 2)}>
            2 Pointer
          </button>
          <button
            className="decrease"
            onClick={() => setTeamAScore(teamAScore - 2)}
          >
            Decrease 2
          </button>
          <button onClick={() => setTeamAScore(teamAScore + 3)}>
            3 Pointer
          </button>
          <button
            className="decrease"
            onClick={() => setTeamAScore(teamAScore - 3)}
          >
            Decrease 3
          </button>
        </div>
      </div>
      <div className="team">
        <h2>Team B</h2>
        <p className="score">{teamBScore}</p>
        <div className="buttons">
          <button onClick={() => setTeamBScore(teamBScore + 1)}>
            Free throw
          </button>
          <button
            className="decrease"
            onClick={() => setTeamBScore(teamBScore - 1)}
          >
            Decrease 1
          </button>
          <button onClick={() => setTeamBScore(teamBScore + 2)}>
            2 Pointer
          </button>
          <button
            className="decrease"
            onClick={() => setTeamBScore(teamBScore - 2)}
          >
            Decrease 2
          </button>
          <button onClick={() => setTeamBScore(teamBScore + 3)}>
            3 Pointer
          </button>
          <button
            className="decrease"
            onClick={() => setTeamBScore(teamBScore - 3)}
          >
            Decrease 3
          </button>
        </div>
      </div>
      <button onClick={endQuarter}>End Quarter</button>
    </div>
  );
}

export default Scoreboard;
