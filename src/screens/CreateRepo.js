import React, { useState } from 'react'
import moment from 'moment'
import { BsCodeSlash } from 'react-icons/bs'

export const CreateRepo = () => {

    const [repo, setRepo] = useState({
        name: '',
        dateUp: moment().format('DD-MM-YYYY'),
        dateMod: moment().format('DD-MM-YYYY'),
        project: '',
        type: 'dev'
    })

    const syncChanges = (value, prop) => {
        let state = { ...repo }
        state[prop] = value
        setRepo(state)
    }

    return (
        <div className='create-repo'>
            <h1>Nuevo Repositorio</h1>
            <div className='form-repo'>
                <div className='row w-100'>
                    <div className='col'>
                        <label>Nombre</label>
                        <input 
                            className='form-control mt-1 in' 
                            type={'text'}
                            onChange={ev => syncChanges(ev.target.value, 'name')}
                            ></input>
                    </div>
                    <div className='col'>
                        <label>Proyecto</label>
                        <input 
                            className='form-control mt-1 in'
                            type='text'
                            onChange={ev => syncChanges(ev.target.value, 'project')}
                            ></input>
                    </div>
                    <div className='col'>
                        <label>Tipo</label>
                        <select className='form-select mt-1 sel'>
                            <option>Administración</option>
                            <option>Desarrollo</option>
                            <option>QA</option>
                        </select>
                    </div>
                </div>
                <div className='preview row w-100'>
                    <div className='col-md-4 mb-4'>
                        <div className='card cd w-100'>
                            <div className='card-body cb'>
                                <div className='box'>
                                    {
                                        repo.type === 'dev' ? 
                                            <BsCodeSlash size={60}/> 
                                        :<></>
                                    }
                                </div>
                                <p className='card-title'>Nombre: {repo.name}</p>
                                <p className='card-title'>Fecha Creación: {repo.dateUp}</p>
                                <p className='card-title'>Fecha Modificación: {repo.dateMod}</p>
                                <p className='card-title'>Proyecto: {repo.project}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4 files'>
                        <p>Plan de Trabajo</p>
                        <p>Diseño</p>
                        <p>Código</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
