import React, { useState } from 'react'
import { useDarkMode } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon, } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = () => {

    const [colorTheme, setColorTheme] = useDarkMode()
    const [themeIcon, setThemeIcon] = useState(false)
    const clickToggle = () => {

        setColorTheme(colorTheme)
        setThemeIcon(!themeIcon)
    }

    return (
        <div className='z-40 bg-orange-400 h-7 w-7 rounded-full flex items-center justify-center cursor-pointer shadow-lg dark:bg-orange-900 duration-200 fixed bottom-4 right-4' onClick={clickToggle}>
            <FontAwesomeIcon icon={themeIcon ? faMoon : faLightbulb} className="dark:text-white text-gray-800 duration-200" />
        </div>
    )
}

export default ToggleTheme