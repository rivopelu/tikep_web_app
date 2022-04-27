import React from 'react'

const BrandLogo = ({ className }) => {
    return (
        <div className={`font-bold ${className}`}>Brand<span className='text-orange-400'>Logo</span></div>
    )
}

export default BrandLogo