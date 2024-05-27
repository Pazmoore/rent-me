'use client'
import React, { useEffect, useState } from 'react'
import { HeaderData } from './headerData'
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import AppsIcon from '@mui/icons-material/Apps'
import SortIcon from '@mui/icons-material/Sort'
import { usePathname, useRouter } from 'next/navigation'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { authObservable } from '@/app/components/auth/isAuth/Auth'
import { toggleMiniSidebar, toggleSidebar } from '../toggleNavbar'
import PropertiesDropDown from '@/app/components/home/properties/PropertiesDropDown'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded'
import './header.scss'

const Header = () => {
  const navigate = useRouter()
  const pathname = usePathname()
  const [openInvest, setOpenInvest] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('accommodations')

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    return () => authSubscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!pathname.includes('features')){
      pathname.includes('workspace') ? setActiveTab('workspace') : pathname.includes('ride') ? setActiveTab('ride') : pathname.includes('gym') ? setActiveTab('gym') :
      pathname.includes('properties') ? setActiveTab('properties') : pathname.includes('sport') ? setActiveTab('sport') : setActiveTab('accommodations')
    }
  }, [pathname])
  
  const handleInvestClick = () => setOpenInvest(!openInvest)
  const tabClick = (tab: string) => {
    if (tab == 'properties' && !authenticated){
      handleInvestClick()
      return
    }
    navigate.push(`/products/${tab}`)
  }
  const sidebarToggle = (menu: string) => {
    const timer = setTimeout(() => {
      menu == 'main' ? toggleSidebar(menu) : toggleMiniSidebar(menu)
    }, (10))
    return () => clearTimeout(timer)
  }

  return (
    <nav className="product-header">
      <div className="buttons">
        <SortIcon className='icon' onClick={() => sidebarToggle('main')} fontSize='medium'/>
        <div className='mini-header'>
          <div className="btn">Go to map</div>
          <Tooltip title={<Typography>Notifications</Typography>}>
            <div className="notify">
              <NotificationsIcon/>
              <FiberManualRecordRoundedIcon fontSize='small' className='alert'/>
            </div>
          </Tooltip>
          <AppsIcon onClick={() => sidebarToggle('mini')} className='icon icon1' fontSize='medium'/>
        </div>
      </div>
      <div className='nav'>
        <div className="nav-header">
          {
            HeaderData.map((content, i) => (
              <div key={i} className='contents'>
                <div className={`content ${ activeTab == content.link && "active"}`} onClick={() => tabClick(content.link)}>
                  {content.content}
                  {content.content == 'Investment' && <span className={`small ${activeTab != 'properties' && 'color'}`}>Fractional</span>}
                  {content.link == 'properties' && <FiberManualRecordRoundedIcon fontSize='small' className={`alert1 ${activeTab != 'properties' && 'color'}`}/>}
                </div>
              </div>
            ))
          }
        </div>
        {openInvest && <PropertiesDropDown openInvest={openInvest} handleInvestClick={handleInvestClick}/>}
      </div>
    </nav>
  )
}

export default Header