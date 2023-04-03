import React from 'react'
import { Spinner } from 'reactstrap'

export const LoadSession = () => {
    return (
        <div className='sesion'>
            <div className='container'>
                <div className='mt-5'>
                    <h2>Iniciando Sesión</h2>
                    <h3>Cargando datos de tu perfil...</h3>
                    <Spinner className='spinner'/>
                </div>
            </div>
        </div>
    )
}
