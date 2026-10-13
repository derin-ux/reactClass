import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='Container'>
        <h3 className='Logo'>Logo</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/log">Log</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar