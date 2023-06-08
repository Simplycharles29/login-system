import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='header'>
      <div className="header-top">
      <Link to='/'>Home </Link>
      <span>|</span>
      {user ? <a href='#' onClick={logoutUser}>Logout</a> : <Link to='/login'> Login</Link>}
      </div>
      
      {user && <p className='header-text'>Hello {user.username}</p>}   
    </div>
  )
}

export default Header
