import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Login = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className='login'>
      <form action="" onSubmit={loginUser}>
      <h2 className='login-title'>Login</h2>
        <div className="inputBox">
        <input type="text" name='username' placeholder='username' />
        </div>
        <div className="inputBox">
        <input type="password" name='password' placeholder='password' />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Login
