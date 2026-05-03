import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(()=>{if(theme==='dark'){
document.documentElement.classList.add('dark')
  }
else
{
  document.documentElement.classList.remove('dark')
}
localStorage.setItem('theme',theme)},[theme])
useEffect(()=>{const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').
  matches;
  setTheme(theme||(prefersDarkMode?'dark':'light'))
})
  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="border border-gray-500 rounded-full p-1.5">
        <img
          src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
          alt="theme toggle"
          className="size-8.5"
        />
      </button>
    </div>
  )
}

export default ThemeToggleBtn
