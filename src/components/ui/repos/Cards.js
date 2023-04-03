import React from 'react'
import { Card } from './Card'

export const Cards = () => {

    const cards = [
        {
            id: 1,
            tp: 'dev',
            name: 'lorem impsum',
            dateCreation: 'lorem impsum',
            dateMod: 'lorem impsum',
            project: 'lorem impsum'
        },
        {
            id: 2,
            tp: 'dev',
            name: 'lorem impsum',
            dateCreation: 'lorem impsum',
            dateMod: 'lorem impsum',
            project: 'lorem impsum'
        },
        {
            id: 3,
            tp: 'dev',
            name: 'lorem impsum',
            dateCreation: 'lorem impsum',
            dateMod: 'lorem impsum',
            project: 'lorem impsum'
        },
        {
            id: 4,
            tp: 'dev',
            name: 'lorem impsum',
            dateCreation: 'lorem impsum',
            dateMod: 'lorem impsum',
            project: 'lorem impsum'
        },
        {
            id: 5,
            tp: 'dev',
            name: 'lorem impsum',
            dateCreation: 'lorem impsum',
            dateMod: 'lorem impsum',
            project: 'lorem impsum'
        }
    ]

    return (
        <>
                {
                    cards.map(card => (
                        <div className='col-md-4 mb-4' key={card.id}>
                            <Card 
                                name={card.name}
                                tp={card.tp}
                                dateCreation={card.dateCreation}
                                dateMod={card.dateMod}
                                project={card.project}
                            />
                        </div>
                    ))
                }
        </>
    )
}
