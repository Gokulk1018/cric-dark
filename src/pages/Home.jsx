import LiveMatchCard from '../components/LiveMatchCard'
import { liveMatches } from '../data/match'

function Home() {
  return (
    <div className="container">
      <div style={{ display: 'grid', gap: '24px' }}>
        {liveMatches.map((m, i) => (
          <LiveMatchCard key={i} {...m} />
        ))}
      </div>
    </div>
  )
}

export default Home
