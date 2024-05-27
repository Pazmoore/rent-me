'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Sidebar from '../sidebar/Sidebar'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PropertiesDropDown from '../properties/PropertiesDropDown'
import ToggleDarkMode from '../../utilities/toggleDarkMode/ToggleDarkMode'
import ToggleLanguage from '../../utilities/toggleLanguage/ToggleLanguage'
import { authenticate, authObservable, showAuth } from '../../auth/isAuth/Auth'
import './header.scss'

const Header = () => {
  const navigate = useRouter()
  const [windowWidth, setWindowWidth] = useState(0)
  const [anticipate, setAnticipate] = useState(false)
  const [openInvest, setOpenInvest] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    return () => authSubscription.unsubscribe()
  }, [])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Remove and add scrollbar on sidebar toggle and window resize
    const tagName = document.getElementsByTagName('html')[0]
    windowWidth > 768 ? tagName.style.overflow = 'auto' : ''
    windowWidth < 768 && showSidebar ? tagName.style.overflow = 'hidden' : 'auto'
  }, [showSidebar, windowWidth])

  const handleProfileClose = () => setOpenProfile(false)
  const handleProfileHover = () => setOpenProfile(!openProfile)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    if (typeof window !== 'undefined'){
      // Remove and add scrollbar on sidebar toggle
      const tagName = document.getElementsByTagName('html')[0]
      windowWidth > 768 ? tagName.style.overflow = 'auto' : ''
      tagName && !showSidebar ? tagName.style.overflow = 'hidden' : tagName.style.overflow = 'auto'
    }
  }
  const search = () => setShowSearch(!showSearch)
  const handleMic = () => {
    setAnticipate(!anticipate)
    const timer = setTimeout(() => {
      setAnticipate(false)
    }, 3000)
    return () => clearTimeout(timer)
  }
  const handleInvestClose = () => setOpenInvest(false)
  const handleShowAuth = (show: string) => authenticated ? authenticate(false) : showAuth(show)
  const handleInvestClick = () => authenticated ? navigate.push('/products/properties') : setOpenInvest(!openInvest)

  return (
    <nav className="header">
      <Image src='/images/header/logo.png' alt="logo" width={100} height={100} className="logo img-color"/>
      {
        showSearch &&
        <form>
          <Image src='/images/header/search.svg' alt="logo" width={100} height={100} className="search none1 img-color"/>
          <input placeholder="Search" type="text" name="search"/>
          <span onClick={() => search()}>×</span>
        </form>
      }
      {
        !showSearch &&
        <Tooltip title={<Typography>Voice search</Typography>}>
          {/* Remove anticipate div and style when feature is completed. */}
          <div className='anticipate'>
            <Image src='/images/header/mic.svg' alt="mic" width={100} height={100} onClick={() => handleMic()} className="mic img-color"/>
            {
              anticipate &&
              <div className='wait'>
                <span onClick={() => handleMic()}>×</span>
                <p>Anticipate...</p>
              </div>
            }
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M38.75 22C38.75 31.2508 31.2508 38.75 22 38.75C12.7492 38.75 5.25 31.2508 5.25 22C5.25 12.7492 12.7492 5.25 22 5.25C31.2508 5.25 38.75 12.7492 38.75 22ZM22 42.25C33.1838 42.25 42.25 33.1838 42.25 22C42.25 10.8162 33.1838 1.75 22 1.75C10.8162 1.75 1.75 10.8162 1.75 22C1.75 33.1838 10.8162 42.25 22 42.25Z" fill="var(--text1)" stroke="url(#paint0_linear_2751_6385)" stroke-width="2.5"/>
              <defs>
                <linearGradient id="paint0_linear_2751_6385" x1="2.81603e-07" y1="8.5" x2="45" y2="41" gradientUnits="userSpaceOnUse">
                  <stop/>
                  <stop offset="0.421501" stop-color="var(--text)" stop-opacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Tooltip>
      }
      <div className="buttons">
        <Tooltip title={<Typography>Search</Typography>}>
          <Image src='/images/header/search.svg' alt="logo" width={100} height={100} onClick={() => search()} className="search none img-color"/>
        </Tooltip>
        <div className='language-hide'>
          <ToggleLanguage/>
        </div>
        <div onMouseLeave={handleInvestClose} className="profile none">
          <button onClick={handleInvestClick} className="register">Fractional investment</button>
          {
            openInvest && <PropertiesDropDown handleInvestClick={handleInvestClick} margin={'-10rem'} openInvest={openInvest}/>
          }
        </div>
        <div onMouseLeave={handleProfileClose} className="profile">
          <Avatar src={authenticated ? '' : '/images/dashboard/general/avatar.png'} onMouseEnter={handleProfileHover} className="avatar"/>
          {
            openProfile &&
            (
              <div className={`dropdown ${openProfile && 'dropdown-active'}`}>
                <div onClick={() => handleShowAuth('login')} className="login">{authenticated ? 'Sign out' : 'Sign in'}</div>
                {!authenticated && <div onClick={() => showAuth('register')} className="login">Sign up</div>}
                {authenticated && <div className="login">Rate us</div>}
                <div className='dark-mode-button'>
                  Theme
                  <ToggleDarkMode/>
                </div>
              </div>
            )
          }
        </div>
        {showSidebar ? <CloseIcon className='icon' fontSize='large'/> : <MenuIcon onClick={toggleSidebar} className='icon' fontSize='large'/>}
      </div>
      {
        showSidebar &&
        <Sidebar handleInvestClick={handleInvestClick} handleInvestClose={handleInvestClose} openInvest={openInvest} search={search} toggleSidebar={toggleSidebar}/>
      }
    </nav>
  )
}

export default Header