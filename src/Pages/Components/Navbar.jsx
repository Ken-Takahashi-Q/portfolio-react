import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li style={{pointerEvents: "none"}}>
              <a href="/Contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
