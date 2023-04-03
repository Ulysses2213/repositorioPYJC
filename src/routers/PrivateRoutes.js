import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { LoadSession } from '../components/auth/LoadSession'
import { AppContext } from '../services/AppContext'

export const PrivateRoutes = ({ children }) => {

    const { user, loadAuth, setLoadAuth  } = useContext(AppContext)
    useEffect(() => {
        setTimeout(() => {setLoadAuth(false)}, 5000);
    }, [])

    if(loadAuth){
        return <LoadSession />
    }
    
    return user.logged 
    ? children
    : <Navigate to='/auth'/>
}
