import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loginpage, MainPage, RegisterPage } from '../../pages'

const MainRouter = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
    )
}

export default MainRouter