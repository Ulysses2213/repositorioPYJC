import React, { useContext } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Auth } from '../components/auth/Auth'
import { AppContext } from '../services/AppContext'
import { AdminRouter } from './Admin/AdminRouter'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { UserRouter } from './User/UserRouter'

export const AppRouter = () => {

    const { user } = useContext(AppContext);


    return (
        <BrowserRouter >
            <Routes>
                <Route path='/auth' element={
                    <PublicRoutes>
                        <Auth />
                    </PublicRoutes>
                }></Route>
                <Route path='/*' element={
                    <PrivateRoutes>
                        {
                            user.usertype === 'admin'
                            ? <AdminRouter />
                            : <UserRouter />
                        }
                    </PrivateRoutes>
                }></Route>
            </Routes>
        </BrowserRouter>
    )
}
