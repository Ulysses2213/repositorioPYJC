import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components/ui/Navbar'
import { CreateRepo } from '../../screens/CreateRepo'
import { MainRepoScreen } from '../../screens/MainRepoScreen'

export const AdminRouter = () => {
    return (
        <>
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route path='/repos' element={ <MainRepoScreen /> }/>
                    <Route path='/createRepository' element={<CreateRepo />} />
                </Routes>
            </div>
        </>
    )
}
