import { topBatsmen, topBowlers } from "../data/players";

export default function Stats() {
  return (
    <>
      <h2>Top Batsmen</h2>
      <ul>
        {topBatsmen.map((p) => (
          <li key={p.name}>{p.name} — {p.runs} runs</li>
        ))}
      </ul>

      <h2>Top Bowlers</h2>
      <ul>
        {topBowlers.map((p) => (
          <li key={p.name}>{p.name} — {p.wkts} wickets</li>
        ))}
      </ul>
    </>
  );
}
