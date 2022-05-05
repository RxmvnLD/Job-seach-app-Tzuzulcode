import React from 'react'

const Navbar = (props) => {
  return (
      <div className={(props.hamburgerToggle?"visible":"invisible")}>
    <ul >
        <li>Iniciar sesión</li>
        <li>Registrarse</li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
      </div>
  )
}

export default Navbar
