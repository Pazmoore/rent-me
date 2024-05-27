'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Avatar from '@mui/material/Avatar'
import { usePathname } from "next/navigation"
import { ClickAwayListener } from "@mui/material"
import { content } from "@/app/interfaces/dashboard/sidebar"
import { authObservable } from "@/app/components/auth/isAuth/Auth"
import { sidebarObservable, toggleSidebar } from "../toggleNavbar"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import { accommodations, properties, propertiesPages, rideSharing, workspace } from "./sidebarData"
import "./sidebar.scss"

const Sidebar = () => {
  const pathname = usePathname()
  const [showSidebar, setShowSidebar] = useState(false)
  const [heading, setHeading] = useState('accommodations')
  const [authenticated, setAuthenticated] = useState(false)
  const [content, setContent] = useState<content[]>(accommodations)
  const [active, setActive] = useState(content[0]['title'])

  useEffect(() => {
    if (!pathname.includes('features')){
      switch (true){
        case pathname.includes('properties'):
          setContent(properties)
          setHeading('Investment Overview')
          break
        case pathname.includes('workspace'):
          setContent(workspace)
          setHeading('Workspace')
          break
        case pathname.includes('ride'):
          setContent(rideSharing)
          setHeading('Car Brands')
          break
        default:
          setContent(accommodations)
          setHeading('Accommodations')
      }
      setActive(content[0]['title'])
    }
  }, [content, pathname])

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    const sidebarSubscription = sidebarObservable.subscribe((menu) => setShowSidebar(menu == 'main'))
    return () => {
      authSubscription.unsubscribe()
      sidebarSubscription.unsubscribe()
    }
  }, [])

  const loadProduct = (title: string) => {
    setActive(title)
    toggleSidebar('none')
  }

  return (
    <ClickAwayListener onClickAway={() => toggleSidebar('none')}>
      <section className={`flex_container ${showSidebar && 'show'}`}>
        <div className="content">
          <div className="profile">
            <Avatar src={authenticated ? '' : '/images/dashboard/general/avatar.png'} alt="Avatar" className="avatar"/>
            <div className="greeting">
              <span>Good Day</span>
              <h2>Awesome.</h2>
            </div>
          </div>
          <p>{heading}</p>

          <div className="links">
            {content.map((data) => (
              <div key={data.id} onClick={() => loadProduct(data.title)} className={`link ${active == data.title && "active"} ${pathname.includes('properties') && "link1"}`}>
                <Image src={data.image} alt="img" width={30} height={30} className='img-color'/>
                <span>{data.title}</span>
              </div>
            ))}
            {
              pathname.includes('properties') &&
              <>
                <p className="pages">PAGES</p>
                {propertiesPages.map((data) => (
                  <div key={data.id} onClick={() => loadProduct(data.title)} className={`link ${active == data.title && "active"}`}>
                    <Image src={data.image} alt="img" width={30} height={30} className='img-color'/>
                    <span>{data.title}</span>
                  </div>
                ))}
              </>
            }
            <KeyboardArrowDownRoundedIcon className="arrow-down"/>
          </div>
        </div>
        <div className="border"></div>
      </section>
    </ClickAwayListener>
  )
}

export default Sidebar