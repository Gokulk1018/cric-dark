function LiveMatchCard({ team1, score1, team2, score2, status, isLive }) {
  return (
    <div style={styles.card}>
      {isLive && (
        <div style={styles.header}>
          <span style={styles.dot}></span> LIVE
        </div>
      )}

      <div style={styles.teams}>
        <div>
          <h3>{team1}</h3>
          <p>{score1}</p>
        </div>
        <div>
          <h3>{team2}</h3>
          <p>{score2}</p>
        </div>
      </div>

      <p style={styles.status}>{status}</p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: 'rgba(17,24,39,0.85)',
    backdropFilter: 'blur(8px)',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
  },
  header: {
    color: '#ef4444',
    fontWeight: '600',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite',
  },
  teams: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  status: {
    color: '#9ca3af',
  },
}

export default LiveMatchCard
