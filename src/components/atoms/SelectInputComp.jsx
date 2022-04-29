import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const SelectInputComp = ({ title }) => {

    const [klikValue, setKlikValue] = useState(true);


    const onclickState = () => {
        setKlikValue(!klikValue)
    }


    const list = [
        { nama: 'tes 1' },
        { nama: 'tes 2' },
        { nama: 'tes 3' },
        { nama: 'tes 4' },
        { nama: 'tes 5' },
    ]
    return (
        <div className='relative w-full'>
            <div className="labal text-gray-500 mb-2">{title}</div>
            <div className="dropDown flex items-center hover:border-gray-700 dark:hover:border-gray-300 justify-between border px-3 py-1 dark:border-gray-600 rounded-md cursor-pointer" onClick={onclickState}>
                <p className='cursor-pointer'>select one</p>
                <FontAwesomeIcon className={`${klikValue ? '' : 'rotate-180'} duration-200 text-gray-500`} icon={faAngleDown} />
            </div>
            <ul className={`${klikValue ? 'hidden' : 'flex'} relative lg:absolute w-full mt-3 bg-white dark:bg-gray-900 dropdownActive  flex-col    justify-between border   dark:border-gray-600 rounded-md`}>

                {
                    list.map((item) => (

                        <li className='border-b dark:border-gray-600 py-2 px-3 hover:bg-orange-400 hover:text-white cursor-pointer' onClick={onclickState}>{item.nama}</li>
                    ))
                }


            </ul>
        </div>
    )
}

export default SelectInputComp