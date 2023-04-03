import React from 'react'
import { Cards } from '../components/ui/repos/Cards'

export const MainRepoScreen = () => {
    return (
        <div className='repos'>
            <h1>Mis Repositorios</h1>

            <div className='btns'>
                    <button>Administración</button>
                    <button>Desarrollo</button>
                    <button>QA</button>
                    <button className='new'>Nuevo Repositorio</button>
            </div>

            <div className='info'>
                <div className='row w-100 ml-2'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}
