
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RecentCardHome } from '../../components'
import CardHome from './CardHome'
import './HomePage.scss'
const HomePage = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col ' id='HomePage'>

                <div className="w-screen top-0 right-0  h-[300px] md:h-[30vh] lg:h-[50vh] bg-homepage "></div>


                <div className='pt-16 containerMain  h-screen  md:px-24 z-10 bg-white -translate-y-4 rounded-t-2xl lg:rounded-none w-screen dark:bg-gray-900'>

                    <CardHome />

                    <div className="recentSearch flex mt-6 lg:mt-0 justify-between">
                        <p>Recent Search</p>
                        <div className='flex items-center gap-2 text-orange-500 cursor-pointer'>
                            <p>See All</p>
                            <FontAwesomeIcon icon={faArrowRight} />

                        </div>
                    </div>
                    <div className='flex flex-col gap-2 pt-6 lg:grid  lg:grid-cols-2 lg:gap-4 '>

                        <RecentCardHome />
                        <RecentCardHome />
                        <RecentCardHome />
                        <RecentCardHome />
                    </div>

                </div>
            </div>


        </>
    )
}

export default HomePage