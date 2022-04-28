import React from 'react'

const BtnComp = ({ className, title, onClick }) => {
    return (
        <button onClick={onClick} className={`${className}  hover:-translate-y-1 duration-200 active:bg-orange-400 bg-orange-400 hover:bg-orange-700  px-5 py-1 text-white rounded-md `}>{title}</button>
    )
}

export default BtnComp