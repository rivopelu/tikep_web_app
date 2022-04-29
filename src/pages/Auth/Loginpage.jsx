import React from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo, ToggleTheme } from '../../components'
import TengahAuth from './components/TengahAuth'

const Loginpage = () => {
    return (
        <div className='flex AuthPage  min-h-screen'>
            <div className="kiri w-[50%]  "></div>
            <div className="kanan w-[100%] lg:w-[50%] flex flex-col containerMain justify-between py-5 items-center text-center ">
                <div className="atas ">

                    <BrandLogo className={'text-2xl '} />
                </div>
                <div className="tengah w-full md:px-24 lg:px-0">
                    <TengahAuth />

                </div>
                <div className="bawah text-sm text-gray-500">
                    2022 All Rights Reserved | Nama Tim Developer
                </div>
            </div>
            <ToggleTheme />

        </div>
    )
}

export default Loginpage