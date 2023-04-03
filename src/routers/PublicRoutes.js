import React, { useContext  } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../services/AppContext'

export const PublicRoutes = ({ children }) => {

    const { user } = useContext(AppContext);


    return user.logged 
    ? <Navigate to='/repos'/>
    : children
}
