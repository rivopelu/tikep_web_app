import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FooterComp, Navbar, ToggleTheme } from '../components'
import { HomePage, TiketPage } from './index'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <ToggleTheme />


            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path={'/tiket'} element={<TiketPage />} />
            </Routes>


            <FooterComp />
        </>
    )
}

export default MainPage