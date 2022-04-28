import React from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo, ToggleTheme } from '../../components'

import TengahRegis from './components/TengahRegis'

const RegisterPage = () => {
    return (
        <div className='flex AuthPage  min-h-screen'>

            <div className="kanan w-[100%] lg:w-[50%] flex flex-col containerMain justify-between py-5 items-center text-center ">
                <div className="atas ">

                    <BrandLogo className={'text-2xl '} />
                </div>
                <div className="tengah w-full">
                    <TengahRegis />

                </div>
                <div className="bawah text-sm text-gray-500">
                    2022 All Rights Reserved | Nama Tim Developer
                </div>
            </div>
            <div className="kiri w-[50%]  "></div>
            <ToggleTheme />

        </div>
    )
}

export default RegisterPage