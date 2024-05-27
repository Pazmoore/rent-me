import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BehaviorSubject } from 'rxjs'
import './toggle-dark-mode.scss'

// Create a BehaviorSubject
const darkModeSubject = new BehaviorSubject(typeof window !== 'undefined' && localStorage.getItem('darkMode') == 'true')

const ToggleDarkMode = ({gap = true} : {gap?: boolean}) => {
  const [darkMode, setDarkMode] = useState(typeof window !== 'undefined' && localStorage.getItem('darkMode') == 'true')

  const toggleDarkMode = () => {
    const newMode = darkMode ? false : true
    setDarkMode(newMode)
    localStorage.setItem('darkMode', `${newMode}`)
    darkModeSubject.next(newMode)
  }

  useEffect(() => {
    const setColorMode = () => {
      if (typeof window !== 'undefined'){
        if (!localStorage.getItem('darkMode')){
          const deviceMode = window.matchMedia('(prefers-color-scheme: dark)').matches
          localStorage.setItem('darkMode', `${deviceMode}`)
          setDarkMode(deviceMode ? true : false)
        }
      }
    }
    setColorMode()
  }, [])

  useEffect(() => {
    darkMode ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
    !darkMode ? document.body.classList.add('light-theme') : document.body.classList.remove('light-theme')
  }, [darkMode])

  return <Image src='/images/header/sun.svg' alt="img" onClick={toggleDarkMode} width={30} height={30} className={`dark-mode ${gap && 'gap'} img-color`}/>
}

export default ToggleDarkMode
export const darkModeObservable = darkModeSubject.asObservable() // Export the BehaviorSubject as an observable