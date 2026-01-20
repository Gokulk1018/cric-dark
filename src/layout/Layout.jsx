import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RightPanel from "./RightPanel";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Topbar />
        <Outlet />
      </main>
      <RightPanel />
    </div>
  );
}
