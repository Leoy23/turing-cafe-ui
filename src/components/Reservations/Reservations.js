import React from 'react'
import ReservationCards from './../ReservationCards/ReservationCards'
import './Reservations.css'

const Reservations = ({ reservations }) => {
    const allResys = reservations.map(resy => {
        return (
            <ReservationCards 
                id={resy.id}
                name={resy.name}
                date={resy.date}
                time={resy.time}
                number={resy.number}
                key={resy.id}
            />
        )
    })

    return(
        <section className='reservations-container'>
            {allResys}
        </section>
    )
}

export default Reservations;