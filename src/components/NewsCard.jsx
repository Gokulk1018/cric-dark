function NewsCard({ title, summary }) {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.summary}>{summary}</p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#020617',
    padding: '16px',
    borderRadius: '12px',
  },
  title: {
    color: '#22c55e',
    marginBottom: '6px',
  },
  summary: {
    color: '#9ca3af',
    fontSize: '14px',
  },
}

export default NewsCard
