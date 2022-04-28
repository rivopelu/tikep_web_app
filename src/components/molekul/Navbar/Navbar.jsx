import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BrandLogo, BtnComp } from "../../atoms";
import './navbar.scss'

function Navbar() {

    const [klikNav, setKlikNav] = useState(false)
    const klikNavbarToggle = () => {
        setKlikNav(!klikNav)
    }

    return (
        <nav id="NavbarComp" className=" bg-gray-100 dark:bg-gray-800 py-3 items-center fixed w-screen  ">
            <div className="containerMain flex justify-between  ">

                <div className="brand lg:text-2xl "><BrandLogo /></div>
                <div id="navMenu" className={klikNav ? '' : 'active'} onClick={klikNavbarToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`kanan flex justify-between  lg:items-center ${klikNav ? '' : 'kanan-active'}`}>
                    <BrandLogo className={'text-2xl logo-kanan'} />
                    <ul className="navList  flex flex-col lg:flex-row gap-10 lg:m-0">
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/'}>Home</NavLink></li>
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/tiket'}>Tiket</NavLink></li>
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/promo'}>Promo</NavLink></li>
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/tips'}>Travel Tips</NavLink></li>
                    </ul>

                    <ul className="lg:ml-3 flex justify-center items-center gap-3 flex-row-reverse lg:flex-row">
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/register'}>Register</NavLink></li>
                        <li className="after:bg-orange-500 "><NavLink className={'lg:pr-2 lg:hover:text-orange-600'} activeClassName='active' to={'/login'}><BtnComp className={'py-1'} title={'Login'} /></NavLink></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;