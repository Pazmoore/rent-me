import React from 'react'
import Image from 'next/image'
import { showAuth } from '../../auth/isAuth/Auth'
import { showProperties } from '../../utilities/viewProperties/showProperties'
import './properties.scss'

const PropertiesDropDown = ({handleInvestClick, margin, openInvest}: {handleInvestClick: any, margin?: string, openInvest: boolean}) => {
  const handleClick = ()=> handleInvestClick()
  const handleLogin = ()=> {
    handleClick()
    showAuth('login')
  }
  const handleView = ()=> {
    handleClick()
    showProperties(true)
  }
  return (
    <div className={`dropdown ${openInvest && 'dropdown-active'}`} style={{marginLeft: margin}}>
      <span onClick={handleClick} className='close'>×</span>
      <div onClick={handleLogin} className='dropdown-content top'>
        <Image src='/images/general/auth/signIn.svg' alt="img" width={30} height={30} className="sign-img img-color"/>
        Sign in to continue
      </div>
      <div onClick={handleView} className='dropdown-content'>
        <Image src='/images/general/card/calendar.png' alt="img" width={30} height={30} className="sign-img img-color"/>
        Check available property
      </div>
    </div>
  )
}

export default PropertiesDropDown