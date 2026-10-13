import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Log from './pages/Log'
import Info from './pages/Info'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<Log />} />
          <Route path="/info" element={<Info />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router> 

  )
}

export default App
