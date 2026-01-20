import { useParams } from "react-router-dom";
import { matchDetails } from "../data/matchDetails";
import "../styles/matchDetails.css";

export default function MatchDetails() {
  const { id } = useParams();
  const match = matchDetails[id];

  if (!match) {
    return <h2>Match details not available</h2>;
  }

  return (
    <div className="match-details">
      <h1>Match Center</h1>

      {/* Toss */}
      {match.toss && (
        <p className="toss">
          Toss: {match.toss.winner} won the toss and chose to{" "}
          {match.toss.decision}
        </p>
      )}

      {/* LIVE / COMPLETED */}
      {match.status !== "UPCOMING" && (
        <>
          <h2>Batting</h2>
          {Object.entries(match.teams).map(([team, data]) =>
            data.playingXI ? (
              <table key={team}>
                <thead>
                  <tr>
                    <th>{team} Batting</th>
                    <th>R</th>
                    <th>B</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {data.playingXI.map((p) => (
                    <tr key={p.name}>
                      <td>{p.name}</td>
                      <td>{p.runs}</td>
                      <td>{p.balls}</td>
                      <td>{p.sr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null
          )}

          <h2>Bowling</h2>
          {Object.entries(match.teams).map(([team, data]) =>
            data.bowling ? (
              <table key={team}>
                <thead>
                  <tr>
                    <th>{team} Bowling</th>
                    <th>O</th>
                    <th>R</th>
                    <th>W</th>
                    <th>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  {data.bowling.map((b) => (
                    <tr key={b.name}>
                      <td>{b.name}</td>
                      <td>{b.overs}</td>
                      <td>{b.runs}</td>
                      <td>{b.wickets}</td>
                      <td>{b.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null
          )}
        </>
      )}

      {/* UPCOMING */}
      {match.status === "UPCOMING" && (
        <>
          <h2>Squads</h2>
          {Object.entries(match.teams).map(([team, data]) => (
            <div key={team}>
              <h3>{team}</h3>
              <ul>
                {data.squad.map((p) => (
                  <li key={p.name}>
                    {p.name} — {p.role} ({p.hand}) • SR:{" "}
                    {p.strikeRate}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
