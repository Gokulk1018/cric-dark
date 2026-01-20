import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">CRIC.CO</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/matches">Matches</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
