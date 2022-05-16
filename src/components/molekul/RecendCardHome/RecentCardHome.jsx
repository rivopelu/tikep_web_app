import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import KapalBulat from './img/KapalBulat.png'
const RecentCardHome = () => {
    return (
        <div className="card bg-white shadow-lg flex flex-col border p-3 rounded-lg dark:bg-gray-800 dark:border-gray-800">
            <div className="tanggal flex items-center gap-1 text-orange-500 bg-orange-100 dark:bg-gray-700 w-fit px-3 py-1 rounded-xl text-xs   ">
                <FontAwesomeIcon icon={faCalendar} />
                <p>marc 16, 2022</p>
            </div>

            <div className='flex justify-between  items-center mt-5'>
                <div className="kiri text-left">
                    <p className='text-gray-400 text-sm'>09 : 00</p>
                    <p className='font-bold capitalize text-xl'>Sangihe</p>
                    <p className='text-xs'>KM. Barcelona</p>
                </div>
                <img src={KapalBulat} className={'flex h-9 lg:h-16'} alt="kapal" />
                <div className="kiri text-right">
                    <p className='text-gray-400 text-sm'>09 : 00</p>
                    <p className='font-bold capitalize text-xl'>Sangihe</p>
                    <p className='text-xs'>KM. Barcelona</p>
                </div>
            </div>
        </div>
    )
}

export default RecentCardHome