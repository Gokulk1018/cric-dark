import NewsCard from '../components/NewsCard'
import { newsData } from '../data/news'

function News() {
  return (
    <div className="container">
      <h2>Latest News</h2>
      <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
        {newsData.map((n, i) => (
          <NewsCard key={i} {...n} />
        ))}
      </div>
    </div>
  )
}

export default News
 