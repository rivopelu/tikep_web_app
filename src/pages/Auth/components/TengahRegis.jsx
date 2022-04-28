import React, { useState } from 'react'
import logo1 from '../img/google.png'
import logo2 from '../img/facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { BtnComp, InputComp } from '../../../components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const TengahRegis = () => {
    let navigate = useNavigate()
    const klikRegis = () => {
        navigate('/')
    }

    const [mata, setMata] = useState(false)
    const mataKlik = () => {
        setMata(!mata)
    }
    return (
        <div className='TengahAuth flex flex-col w-full '>
            <p>Daftar</p>
            <p className='text-gray-400 text-sm mb-3'>Lorem ipsum dolor sit.</p>

            <div className="inputComp-auth flex flex-col gap-3">
                <div className='relative '>

                    <InputComp type={'text'} title={'Nama Lengkap'} />
                    <FontAwesomeIcon icon={faUser} className={'absolute right-4 top-[10px] text-gray-500'} />
                </div>
                <div className='relative '>

                    <InputComp type={'email'} title={'Alamat Email'} />
                    <FontAwesomeIcon icon={faEnvelope} className={'absolute right-4 top-[10px] text-gray-500'} />
                </div>
                <div className='relative'>

                    <InputComp type={mata ? 'text' : 'password'} title={'password'} />
                    <FontAwesomeIcon onClick={mataKlik} icon={mata ? faEyeSlash : faEye} className={'cursor-pointer absolute right-4 top-[10px] text-gray-500'} />
                </div>
                <div className='relative'>

                    <InputComp type={mata ? 'text' : 'password'} title={'Confirm Password'} />
                    <FontAwesomeIcon onClick={mataKlik} icon={mata ? faEyeSlash : faEye} className={'cursor-pointer absolute right-4 top-[10px] text-gray-500'} />
                </div>
            </div>
            <div className="relative garis border-b-2 w-full dark:border-gray-700 my-6 flex items-center">
                <p className=" bg-white px-2 text-[13px] text-gray-500 dark:bg-gray-900 mx-auto translate-y-[10px]">
                    Atau Masuk Dengan
                </p>
            </div>
            <div className='flex  justify-center items-center w-full '>

                <div className="SOSMED-GROUP   flex gap-3">
                    <div onClick={() => alert('klik google')} className="flex border w-10 h-10 justify-center items-center rounded-lg dark:border-gray-600 hover:-translate-y-1 duration-200 cursor-pointer">
                        <img src={logo1} className='w-6 h-6' alt="GoogleLogo" />
                    </div>
                    <div onClick={() => alert('klik facebook')} className="flex border w-10 h-10 justify-center items-center rounded-lg dark:border-gray-600 hover:-translate-y-1 duration-200 cursor-pointer">
                        <img src={logo2} className='w-6 h-6' alt="GoogleLogo" />
                    </div>
                    <div onClick={() => alert('klik Apple')} className="flex border w-10 h-10 justify-center items-center rounded-lg dark:border-gray-600 hover:-translate-y-1 duration-200 cursor-pointer">
                        <FontAwesomeIcon icon={faAppleAlt} className='w-6 h-6' />
                    </div>
                </div>
            </div>


            <BtnComp className={'mt-4'} title={'Daftar'} onClick={klikRegis} />
            <div className='mt-7 text-sm'>
                Sudah Memiliki Akun ? <Link to={'/login'} className='text text-orange-500'>Silahkan Masuk</Link>
            </div>
        </div>
    )
}

export default TengahRegis