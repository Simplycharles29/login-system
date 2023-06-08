import { useContext } from 'react'
import { Outlet, Navigate, Routes, redirect, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

        
const PrivateRoute = ({children, ...rest}) =>{
    let {user} = useContext(AuthContext)
    return (
       user ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoute