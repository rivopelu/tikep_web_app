import React, { useState } from 'react'
import logo1 from '../img/google.png'
import logo2 from '../img/facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { BtnComp, InputComp } from '../../../components'
import { Link } from 'react-router-dom'

const TengahAuth = () => {

    const [mata, setMata] = useState(false)
    const mataKlik = () => {
        setMata(!mata)
    }
    return (
        <div className='TengahAuth flex flex-col w-full '>
            <p>Masuk</p>
            <p className='text-gray-400 text-sm mb-3'>Lorem ipsum dolor sit.</p>
            <div className="SOSMED-GROUP flex flex-col gap-3">
                {/* MASUK DENGAN GOOGLE */}
                <div onClick={() => alert('klik google')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                    <div className='relative border  w-full text-center  mx-auto py-2 rounded-md dark:border-gray-500 dark:hover:border-white hover:border-gray-700 cursor-pointer'>
                        Masuk Dengan Google

                        <img className='absolute h-6  top-2 left-5' src={logo1} alt="googleLogo" />
                    </div>
                </div>
                {/* MASUK DENGAN FACEBOOK */}
                <div onClick={() => alert('klik Facebook')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                    <div className='relative border  w-full text-center  mx-auto py-2 rounded-md dark:border-gray-500 dark:hover:border-white hover:border-gray-700 cursor-pointer'>
                        Masuk Dengan Facebook

                        <img className='absolute h-6  top-2 left-5' src={logo2} alt="googleLogo" />
                    </div>
                </div>
                {/* MASUK DENGAN FACEBOOK */}
                <div onClick={() => alert('klik Apple')} className="login-sosmed flex w-full text-center items-center justify-center  hover:-translate-y-1 duration-150 ">
                    <div className='relative border  w-full text-center  mx-auto py-2 rounded-md dark:border-gray-500 dark:hover:border-white hover:border-gray-700 cursor-pointer'>
                        Masuk Dengan Apple

                        <FontAwesomeIcon className='absolute h-6  top-2 left-5' icon={faAppleAlt} />
                    </div>
                </div>
            </div>
            <div className="relative garis border-b-2 w-full dark:border-gray-700 my-6 flex items-center">
                <p className=" bg-white px-2 text-[13px] text-gray-500 dark:bg-gray-900 mx-auto translate-y-[10px]">
                    Atau Masuk Dengan
                </p>
            </div>
            <div className="inputComp-auth flex flex-col gap-3">
                <div className='relative '>

                    <InputComp type={'email'} title={'Alamat Email'} />
                    <FontAwesomeIcon icon={faUser} className={'absolute right-4 top-[10px] text-gray-500'} />
                </div>
                <div className='relative'>

                    <InputComp type={mata ? 'text' : 'password'} title={'password'} />
                    <FontAwesomeIcon onClick={mataKlik} icon={mata ? faEyeSlash : faEye} className={'cursor-pointer absolute right-4 top-[10px] text-gray-500'} />
                </div>
            </div>
            <Link to={'/login'} className=' text-sm text-orange-500 mt-3'>Lupa Password?</Link>
            <BtnComp className={'mt-4'} title={'Masuk'} onClick={() => alert('klik Masuk')} />
            <div className='mt-7 text-sm'>
                Belum Memiliki Akun ? <Link to={'/register'} className='text text-orange-500'>Silahkan Register</Link>
            </div>
        </div>
    )
}

export default TengahAuth