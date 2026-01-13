import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CricScore</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Live</Link></li>
        <li><Link to="/scores" style={styles.link}>Scores</Link></li>
        <li><Link to="/news" style={styles.link}>News</Link></li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 32px',
    backgroundColor: '#020617',
    boxShadow: '0 4px 20px rgba(34,197,94,0.15)',
  },
  logo: {
    color: '#22c55e',
    fontWeight: '700',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: '#e5e7eb',
    textDecoration: 'none',
  },
}

export default Navbar
