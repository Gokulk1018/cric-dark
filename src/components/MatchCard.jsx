import { TEAM_LOGOS } from "../assets/images";
import "../styles/cards.css";
import { useNavigate } from "react-router-dom";

export default function MatchCard({ match, status }) {
  const logoA = TEAM_LOGOS[match.teamA] || TEAM_LOGOS.DEFAULT;
  const logoB = TEAM_LOGOS[match.teamB] || TEAM_LOGOS.DEFAULT;
  const navigate = useNavigate();

  return (
    <div
      className="match-card"
      onClick={() => navigate(`/match/${match.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-header">
        <span className={`badge ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="teams">
        <div className="team">
          <img src={logoA} alt={match.teamA} />
          <span>{match.teamA}</span>
        </div>

        <span className="vs">VS</span>

        <div className="team">
          <img src={logoB} alt={match.teamB} />
          <span>{match.teamB}</span>
        </div>
      </div>

      <div className="score">
        {match.scoreA && <div>{match.scoreA}</div>}
        {match.scoreB && (
          <div className="muted">{match.scoreB}</div>
        )}
        {match.time && (
          <div className="muted">{match.time}</div>
        )}
        {match.result && (
          <div className="muted">{match.result}</div>
        )}
      </div>

      {status === "LIVE" && (
        <button
          className="watch"
          onClick={(e) => {
            e.stopPropagation(); // prevent double navigation
            navigate(`/match/${match.id}`);
          }}
        >
          Watch Live
        </button>
      )}
    </div>
  );
}
