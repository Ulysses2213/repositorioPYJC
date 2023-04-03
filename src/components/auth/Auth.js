import React, { useContext, useState } from 'react'
import logo from '../../resources/logoLogin.png'
import imagen from '../../resources/contentImg.jpg'
import { AppContext } from '../../services/AppContext'
import Swal from 'sweetalert2'
import { postData } from '../../services/apiService'

export const Auth = () => {

    const { setUser, setLoadAuth } = useContext(AppContext)

    const [formUser, setFormUser] = useState({
        username: '',
        password: ''
    })

    const handleForm = (value, prop) => {
        var state = { ...formUser }
        state[prop] = value
        setFormUser(state)
    }

    const handleAuth = async() => {
        if(formUser.username !== '' && formUser.password !== ''){
            const response = await postData('authUser', formUser)
            if(response.status === 200){
                switch(response.data){
                    case -1: {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error en Credenciales',
                            text: 'La contraseña o el nombre de usuario es incorrecto',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: '#599876'
                        })
                        break
                    }
                    case -2: {
                        Swal.fire({
                            icon: 'error',
                            title: 'Usuario no encontrado',
                            text: 'El usuario no ha sido encontrado dentro de la base de datos',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: '#599876'
                        })
                        break
                    }
                    default: {
                        setLoadAuth(true)
                        setUser(response.data)
                        break
                    }
                }
            }
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Campos Vacíos',
                text: 'Debe llenar los campos obligatorios',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#599876'
            })
        }
    }

    return (
        <div className='auth'>
            <div className='side'>
                <h1>REPOSITORIO</h1>
                <div className='logo'>
                    <img src={logo} alt='logopyjc'/>
                </div>
                <div className='form-login'>
                    <div className='row p-3'>
                        <label>Nombre de Usuario</label>
                        <input 
                            type='text'
                            onChange={(ev => handleForm(ev.target.value, 'username'))}
                            />
                    </div>
                    <div className='row p-3'>
                        <label>Contraseña</label>
                        <input
                            type='password'
                            onChange={ev => handleForm(ev.target.value, 'password')}
                        />
                    </div>
                    <div className='row p-3'>
                        <button
                            onClick={handleAuth}
                        >Ingresar</button>
                    </div>
                    <div className='row mt-2'>
                        <p>V0.0.0</p>
                    </div>
                </div>
            </div>
            <div className='auth'>
                <div className='img-content'>
                    <img src={imagen} alt='logopyjc'/>
                </div>
            </div>
        </div>
    )
}
