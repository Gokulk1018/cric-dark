import { HERO_IMAGE } from "../assets/images";
import { matches } from "../data/matches";
import MatchCard from "../components/MatchCard";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="hero-overlay">
          <h1>Virat Kohli Special</h1>
          <p>International & IPL Action Live</p>
          <button className="primary-btn">Watch Live</button>
        </div>
      </section>

      <h2>Live Matches</h2>
      <div className="match-grid">
        {matches.live.map((m) => (
          <MatchCard key={m.id} match={m} status="LIVE" />
        ))}
      </div>

      <h2>Upcoming Matches</h2>
      <div className="match-grid">
        {matches.upcoming.map((m) => (
          <MatchCard key={m.id} match={m} status="UPCOMING" />
        ))}
      </div>
    </div>
  );
}
