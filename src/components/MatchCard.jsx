import { TEAM_LOGOS } from "../assets/images";
import "../styles/cards.css";

export default function MatchCard({ match, status }) {
  const logoA = TEAM_LOGOS[match.teamA] || TEAM_LOGOS.DEFAULT;
  const logoB = TEAM_LOGOS[match.teamB] || TEAM_LOGOS.DEFAULT;

  return (
    <div className="match-card">
      <div className="card-header">
        <span className={`badge ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="teams">
        <div className="team">
          <img src={logoA} />
          <span>{match.teamA}</span>
        </div>

        <span className="vs">VS</span>

        <div className="team">
          <img src={logoB} />
          <span>{match.teamB}</span>
        </div>
      </div>

      <div className="score">
        {match.scoreA && <div>{match.scoreA}</div>}
        {match.scoreB && <div className="muted">{match.scoreB}</div>}
        {match.time && <div className="muted">{match.time}</div>}
        {match.result && <div className="muted">{match.result}</div>}
      </div>

      {status === "LIVE" && (
        <button className="watch">Watch Live</button>
      )}
    </div>
  );
}
