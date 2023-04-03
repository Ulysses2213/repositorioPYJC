import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../resources/logo.png'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='logo'>
                <li className='col'>
                    <img src={ logo }/>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink 
                    className='text-center text-white rounded py-2 w-100 d-inline-block px-4'
                    activeClassName={({ isActive }) => "" + (isActive ? 'active' : '')}
                    to="/repos"
                    title='Mis Repositorios'>
                        MIS REPOS
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
