import { useState } from "react";
import { pointsTable } from "../data/pointsTable";
import { TEAM_LOGOS } from "../assets/images";
import "../styles/points.css";

export default function RightPanel() {
  const [format, setFormat] = useState("TEST");
  const [showAllIPL, setShowAllIPL] = useState(false);
  const [showAllICC, setShowAllICC] = useState(false);

  const visibleIPL = showAllIPL
    ? pointsTable.IPL
    : pointsTable.IPL.slice(0, 5);

  const visibleICC = showAllICC
    ? pointsTable.ICC[format]
    : pointsTable.ICC[format].slice(0, 5);

  return (
    <aside className="right-panel">
      {/* ================= IPL ================= */}
      <h3 className="panel-title">IPL Points Table</h3>

      <div className="points-table">
        {visibleIPL.map((team, index) => (
          <div className="points-row" key={team.code}>
            <div className="team-info">
              <span className="rank">{index + 1}</span>
              <img src={TEAM_LOGOS[team.code]} alt={team.team} />
              <span className="team-name">{team.team}</span>
            </div>

            <div className="stats">
              <span>{team.m}</span>
              <span>{team.w}</span>
              <span>{team.l}</span>
              <span className="pts">{team.pts}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="show-more"
        onClick={() => setShowAllIPL(!showAllIPL)}
      >
        {showAllIPL ? "Show Less" : "Show More"}
      </button>

      {/* ================= ICC ================= */}
      <h3 className="panel-title" style={{ marginTop: 32 }}>
        ICC Rankings
      </h3>

      <div className="format-tabs">
        {["TEST", "ODI", "T20"].map((f) => (
          <button
            key={f}
            className={format === f ? "active" : ""}
            onClick={() => {
              setFormat(f);
              setShowAllICC(false);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="points-table">
        {visibleICC.map((team, index) => (
          <div className="points-row" key={team.code}>
            <div className="team-info">
              <span className="rank">{index + 1}</span>
              <img src={TEAM_LOGOS[team.code]} alt={team.team} />
              <span className="team-name">{team.team}</span>
            </div>

            <div className="stats">
              <span>{team.m}</span>
              <span>{team.w}</span>
              <span>{team.l}</span>
              <span className="pts">{team.pts}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="show-more"
        onClick={() => setShowAllICC(!showAllICC)}
      >
        {showAllICC ? "Show Less" : "Show More"}
      </button>
    </aside>
  );
}
