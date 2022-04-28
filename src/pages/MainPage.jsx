import React from 'react'
import { FooterComp, Navbar, ToggleTheme } from '../components'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <ToggleTheme />
            <div className="flex items-center justify-center w-screen h-screen">

                <div>MainPage</div>

            </div>
            <div className="flex items-center justify-center w-screen h-screen">

                <div>MainPage</div>

            </div>

            <FooterComp />
        </>
    )
}

export default MainPage