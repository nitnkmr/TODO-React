import React from 'react'
import './Header.css'

const Header = () => {
  return (
<div className="header">
    <h2>TODO List</h2>
    <div className="nav">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</div>
    )
}

export default Header