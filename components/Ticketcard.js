import React from 'react'
import style from '../styles/Ticket.module.css';

const Ticketcard = ({ data }) => {
    return (
        <>
            <div className='grid grid-cols-5 gap-12 drop-shadow-2xl text-center '>
                <div className={`${style.shadow} ${style.head}`}>{data.ticketid}</div>
                <div className={`${style.shadow} ${style.head}`}>{data.category}</div>
                <div className={`${style.shadow} ${style.head}`}>{data.reason}</div>
                <div className={`${style.shadow} ${style.head}`}>{data.date}</div>
                <div className={`${style.shadow} ${style.head}`}>{data.status}</div>
            </div>
        </>
    )
}

export default Ticketcard