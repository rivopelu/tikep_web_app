import React, { useState } from 'react'
import { faArrowRight, faPlane, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SelectInputComp } from '../../components'
const CardHome = () => {



    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className='card border bg-white dark:bg-gray-900 dark:border-gray-600 px-3 lg:px-14 py-6 rounded-md shadow-lg lg:-translate-y-20'>
            <div className="atas flex flex-col  lg:flex-row lg:items-center lg:justify-between ">
                <div className='flex  items-center gap-3'>

                    <div className="rounded-full bg-orange-400 w-5 p-4  h-5  flex items-center justify-center text-white">
                        <FontAwesomeIcon icon={faTicket} />
                    </div>
                    <p className='text-card-homepage font-bold text-sm lg:text-md '>Cari tiket perjalanan anda disini dan dapatkan promo menarik</p>
                </div>
                <div className='cursor-pointer flex items-center pt-4 lg:pt-0 text-orange-400 gap-1 pencarian-terakhir' onClick={() => alert('klik Perncarian terakhir')}>
                    <p className='text-sm  '>Pencarian Terakhir</p>
                    <FontAwesomeIcon className='icon duration-200' icon={faArrowRight} />
                </div>
            </div>

            <div className={`mt-3 flex flex-col lg:flex-row justify-between w-full gap-3`}>

                <SelectInputComp />
                <SelectInputComp />
                <SelectInputComp />


            </div>
        </div>

    )
}

export default CardHome