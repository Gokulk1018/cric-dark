import "../styles/tabs.css";

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={active === tab ? "tab active" : "tab"}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
