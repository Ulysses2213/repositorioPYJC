import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'

export const Card = ({ name, tp, dateCreation, dateMod, project }) => {
    return (
        <div className='card cd w-100'>
            <div className='card-body cb'>
                {
                    tp === 'dev' ? 
                    <div className='box'>
                        <BsCodeSlash size={60}/> 
                    </div>
                    : <></>
                }
                <p className='card-title'>{ name }</p>
                <p className='card-title'>{ dateCreation }</p>
                <p className='card-title'>{ dateMod }</p>
                <p className='card-title'>{ project }</p>
            </div>
        </div>
    )
}
