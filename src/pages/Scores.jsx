import LiveMatchCard from '../components/LiveMatchCard'
import { liveMatches } from '../data/match'

function Scores() {
  return (
    <div className="container">
      <h2>All Matches</h2>
      <div style={{ display: 'grid', gap: '24px', marginTop: '16px' }}>
        {liveMatches.map((m, i) => (
          <LiveMatchCard key={i} {...m} />
        ))}
      </div>
    </div>
  )
}

export default Scores
