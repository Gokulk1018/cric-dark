import { pointsTable } from "../data/pointsTable";

export default function RightPanel() {
  return (
    <aside className="right-panel">
      <h3>Points Table</h3>
      <table>
        <thead>
          <tr>
            <th>Team</th><th>M</th><th>W</th><th>L</th><th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((t) => (
            <tr key={t.team}>
              <td>{t.team}</td>
              <td>{t.m}</td>
              <td>{t.w}</td>
              <td>{t.l}</td>
              <td>{t.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}
