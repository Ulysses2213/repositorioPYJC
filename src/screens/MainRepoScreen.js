import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Cards } from '../components/ui/repos/Cards'
import { getData } from '../services/apiService'
import { FaBoxOpen } from 'react-icons/fa'

export const MainRepoScreen = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData(){
            const response = await getData('getRepos')
            if(response.status === 200){
                setData(data)
            }
        }
        loadData()
    }, [])
    
    return (
        <div className='repos'>
            <h1>Mis Repositorios</h1>

            <div className='btns'>
                    <button>Administración</button>
                    <button>Desarrollo</button>
                    <button>QA</button>
                    <NavLink to={'/createRepository'} className='new'>Nuevo Repositorio</NavLink>
            </div>
            
            <div className='info'>
                <div className='row w-100 ml-2'>
                    {
                        data.length !== 0 ?
                        <Cards />
                        :
                        <>
                            <FaBoxOpen className='no-repo' size={40}/>
                            <label>No hay repositorios</label>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
