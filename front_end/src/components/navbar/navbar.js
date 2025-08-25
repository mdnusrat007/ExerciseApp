import React from 'react'
import Navbarstyle from '../../components/navbar/navbarstyle.css'

const Navbar = () => {
  return (
    <navbar>
        <h1>Workout Tracker</h1>
        <div className="menu">
            <p>SIGN UP</p>
            <p>LOGIN</p>
        </div>
    </navbar>
  )
}

export default Navbar