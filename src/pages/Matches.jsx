import { useState } from "react";
import { matches } from "../data/matches";
import MatchCard from "../components/MatchCard";
import Tabs from "../components/Tabs";

export default function Matches() {
  const [active, setActive] = useState("LIVE");

  const map = {
    LIVE: matches.live,
    UPCOMING: matches.upcoming,
    COMPLETED: matches.completed,
  };

  return (
    <>
      <h2>Matches</h2>

      <Tabs
        tabs={["LIVE", "UPCOMING", "COMPLETED"]}
        active={active}
        onChange={setActive}
      />

      <div className="match-grid fade-in">
        {map[active].map((m) => (
          <MatchCard
            key={m.id}
            match={m}
            status={active}
          />
        ))}
      </div>
    </>
  );
}
