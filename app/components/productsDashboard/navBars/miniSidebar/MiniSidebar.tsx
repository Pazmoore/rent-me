'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { icons } from "./miniSidebarData"
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { ClickAwayListener } from "@mui/material"
import { usePathname, useRouter } from 'next/navigation'
import { miniSidebarObservable, toggleMiniSidebar } from "../toggleNavbar"
import { authObservable, showAuth } from '@/app/components/auth/isAuth/Auth'
import ToggleDarkMode from "@/app/components/utilities/toggleDarkMode/ToggleDarkMode"
import "./mini-sidebar.scss"

const MiniSidebar = () => {
  const navigate = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    !pathname.includes('features') && setActive('')
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    const sidebarSubscription = miniSidebarObservable.subscribe((menu) => setShowSidebar(menu == 'mini'))
    return () => {
      authSubscription.unsubscribe()
      sidebarSubscription.unsubscribe()
    }
  }, [pathname])

  const view = (link: string) => {
    if (!authenticated && (link != 'trending' && link != 'deals')){
      showAuth('login')
      return
    }
    navigate.push(`/products/features/${link}`)
    toggleMiniSidebar('none')
    setActive(link)
  }

  return (
    <ClickAwayListener onClickAway={() => toggleMiniSidebar('none')}>
      <section className={`sidebars ${showSidebar && 'show1'}`}>
        <Image src="/images/header/logo.png" width={20} height={20} alt="profile" onClick={() => navigate.push('/')} className="logo img-color"/>
        <div className="sidebars_links">
          {
            icons.map((icon, i) => (
              <Tooltip key={i} title={<Typography>{icon?.title}</Typography>} placement="top-end" className={`link-img ${active == icon.link && 'active'}`}>
                <Image src={icon?.image ?? ''} width={20} height={20} alt="img" onClick={() => view(icon.link)} className="img-color"/>
              </Tooltip>
            ))
          }
          <div className="mode">
            <ToggleDarkMode gap={false}/>
          </div>
        </div>
      </section>
    </ClickAwayListener>
  )
}

export default MiniSidebar