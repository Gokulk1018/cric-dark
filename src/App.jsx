import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Scores from './pages/Scores'
import News from './pages/News'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
