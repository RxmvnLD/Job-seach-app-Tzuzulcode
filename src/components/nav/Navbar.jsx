import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
      <div className={(props.hamburgerToggle?"visible":"invisible")}>
    <ul >
        <li><Link to="/login">Login</Link></li>
        <li>Registrarse</li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
      </div>
  )
}

export default Navbar
