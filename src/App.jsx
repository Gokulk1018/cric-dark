import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import Home from './pages/Home'
import Matches from './pages/Matches'
import Stats from './pages/Stats'
import Teams from './pages/Teams'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import MatchDetails from "./pages/MatchDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>\
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/match/:id" element={<MatchDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
