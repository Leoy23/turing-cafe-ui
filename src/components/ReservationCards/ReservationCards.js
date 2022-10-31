import React from 'react'
import './ReservationCards.css'

const ReservationCards = ({id, name, date, time, number}) => {
    return (
        <section className='cards'>
            <p>{name}</p>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of Guests: {number}</p>
            <button>Cancel</button>
        </section>
    )
}

export default ReservationCards;