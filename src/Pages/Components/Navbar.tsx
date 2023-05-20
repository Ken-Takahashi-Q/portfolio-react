import React from 'react'
import './navbar.scss'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li style={{cursor: "not-allowed"}}>
              <a href="/Contact" style={{pointerEvents: "none"}}>Contact</a>
            </li> */}
            <li style={{cursor: "not-allowed"}}>
              <a href="/projects" style={{pointerEvents: "none"}}>All Projects</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
