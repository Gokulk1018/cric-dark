import { useState } from "react";
import { matches } from "../data/matches";
import MatchCard from "../components/MatchCard";
import Tabs from "../components/Tabs";

export default function Matches() {
  const [tab, setTab] = useState("LIVE");

  const data = {
    LIVE: matches.live,
    UPCOMING: matches.upcoming,
    COMPLETED: matches.completed,
  };

  return (
    <>
      <h2>Matches</h2>
      <Tabs
        tabs={["LIVE", "UPCOMING", "COMPLETED"]}
        active={tab}
        onChange={setTab}
      />
      <div className="grid">
        {data[tab].map(m => (
          <MatchCard key={m.id} match={m} status={tab} />
        ))}
      </div>
    </>
  );
}
