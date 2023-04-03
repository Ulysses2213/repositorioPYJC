import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AppContext } from './services/AppContext'

export const RepoApp = () => {

    const [user, setUser] = useState({
        id: '',
        username: '',
        name: '',
        firstname: '',
        secondname: '',
        usertype: '',
        logged: false
    })

    const [loadAuth, setLoadAuth] = useState(false)

    return (
        <AppContext.Provider value={{
            //Contexto para la data del usuario
            user,
            setUser,
            //Bandera de carga de la pantalla de auth
            loadAuth,
            setLoadAuth
        }}>
            <AppRouter />
        </AppContext.Provider>
    )
}
