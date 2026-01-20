import { TEAM_LOGOS } from "../assets/images";

export default function Teams() {
  return (
    <>
      <h2>Teams</h2>
      <div className="match-grid">
        {Object.keys(TEAM_LOGOS)
          .filter((t) => t !== "DEFAULT")
          .map((team) => (
            <div key={team} className="match-card">
              <img
                src={TEAM_LOGOS[team]}
                alt={team}
                style={{ width: 50 }}
              />
              <h3>{team}</h3>
            </div>
          ))}
      </div>
    </>
  );
}
