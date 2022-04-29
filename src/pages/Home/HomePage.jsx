
import React from 'react'
import CardHome from './CardHome'
import './HomePage.scss'
const HomePage = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col ' id='HomePage'>

                <div className="w-screen top-0 right-0  h-[300px] md:h-[30vh] lg:h-[50vh] bg-homepage "></div>


                <div className='pt-16 containerMain  h-screen  md:px-24 z-10 bg-white -translate-y-4 rounded-t-2xl lg:rounded-none w-screen dark:bg-gray-900'>

                    <CardHome />



                </div>
            </div>


        </>
    )
}

export default HomePage