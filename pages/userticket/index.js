import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Ticketcard from '../../components/Ticketcard'
import style from '../../styles/Ticket.module.css'


const tickets = () => {


    return (
        <>
            <Navbar />
            <div className='mx-4'>
                <div className='ticket-table'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl my-7 font-medium font-serif'>My Tickets</h1>
                        <select className={`${style.shadow} ${style.head} w-40 h-11 `}>
                            <option selected disabled >Status</option>
                            <option value="" className='text-left'>Completed</option>
                            <option value="" className='text-left'>Pending</option>
                            <option value="" className='text-left'>abc</option>
                        </select>
                    </div>

                    <div className='grid grid-cols-5 gap-12 drop-shadow-2xl text-center mb-14'>

                        <div className={`${style.shadow} ${style.head}`}>Ticket Id </div>
                        <div className={`${style.shadow} ${style.head}`}>Category</div>
                        <div className={`${style.shadow} ${style.head}`}>Reason</div>
                        <div className={`${style.shadow} ${style.head}`}>Date</div>
                        <div className={`${style.shadow} ${style.head}`}>Status</div>

                    </div>

                    <Ticketcard data={{ ticketid: 'dfddfvdf', category: 'gsegseg', reason: 'sdgdkjasgkfgugfjasefgfhyasfkgfyasfjashgfyufyuyfyusdsgdsg', date: 'fwetaea', status: 'sfsefysg' }} />

                </div>
            </div>
        </>
    )
}

export default tickets