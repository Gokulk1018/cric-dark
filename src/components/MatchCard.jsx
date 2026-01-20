import { TEAM_LOGOS } from "../assets/images";
import "../styles/cards.css";

export default function MatchCard({ match, status }) {
  const logoA = TEAM_LOGOS[match.teamA] || TEAM_LOGOS.DEFAULT;
  const logoB = TEAM_LOGOS[match.teamB] || TEAM_LOGOS.DEFAULT;

  return (
    <div className="match-card">
      <span className={`status-badge ${status.toLowerCase()}`}>
        {status}
      </span>

      <div className="teams-row">
        <div className="team">
          <img src={logoA} alt={match.teamA} />
          <strong>{match.teamA}</strong>
        </div>

        <span className="vs">VS</span>

        <div className="team">
          <img src={logoB} alt={match.teamB} />
          <strong>{match.teamB}</strong>
        </div>
      </div>

      <div className="scores">
        {match.scoreA && <span>{match.scoreA}</span>}
        {match.scoreB && <span className="muted">{match.scoreB}</span>}
        {match.time && <span className="muted">{match.time}</span>}
        {match.result && <span className="muted">{match.result}</span>}
      </div>

      {status === "LIVE" && (
        <button className="watch-btn">Watch Live</button>
      )}
    </div>
  );
}
