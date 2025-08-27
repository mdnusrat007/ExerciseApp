import React from 'react'
import '../../components/navbar/navbarstyle.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/uselogout'
import { useAuthcontext } from '../../hooks/useauthcontext'

const Navbar = () => {
  const { user } = useAuthcontext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <navbar>
      <h1>
        <Link to="/">WorkoutBuddy</Link>
      </h1>
      {user && (
        <div className='logout menu'>
          <span>{user.email}</span>
          <p><button onClick={handleClick}>LOGOUT</button></p>
        </div>
      )}
      {!user && (
        <div className="menu auth">
          <p><Link to="/signup">SIGN UP</Link></p>
          <p><Link to="/login">LOGIN</Link></p>
        </div>
      )}
    </navbar>
  )
}

export default Navbar