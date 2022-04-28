import React, { useState } from 'react'
import './style/inputComp.scss'
const InputComp = ({ type, title, className }) => {
    const [klikInput, setKlikInput] = useState(false)

    const inputChange = () => {
        setKlikInput(true)
    }
    return (
        <div className="inputComp flex w-full relative">
            <input onClick={inputChange} type={type} className={` bg-transparent ${klikInput ? 'inputActive' : ''} border w-full  px-6 focus:outline-none rounded-md py-2  dark:border-gray-600 border-gray-400 focus:border-orange-700 text-sm bg-transparent   ${className}`} />

            <div onClick={inputChange} className="label absolute top-[8px] text-gray-500 left-3 bgg text-sm">{title}</div>

        </div>
    )
}

export default InputComp