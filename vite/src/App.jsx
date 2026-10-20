import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Log from './pages/Log'
import Info from './pages/Info'
import Portfolio from './pages/Portfolio'
import SignUp from './pages/Signup'
import Login from './pages/Login'


function App() {

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/log" element={<Log />} />
          <Route path="/info" element={<Info />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 

  )
}

export default App
