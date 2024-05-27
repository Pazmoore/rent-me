import React from 'react'
import Image from 'next/image'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import PropertiesDropDown from '../properties/PropertiesDropDown'
import ToggleLanguage from '../../utilities/toggleLanguage/ToggleLanguage'
import './sidebar.scss'

const Sidebar = ({handleInvestClick, handleInvestClose, openInvest, search, toggleSidebar}: any) => {
  const toggleSearch = () => {
    toggleSidebar()
    search()
  }

  return (
    <ClickAwayListener onClickAway={toggleSidebar}>
      <div className="sidebar">
        <Image src='/images/header/logo.png' alt="logo" width={100} height={100} className="logo img-color"/>
        <ul className="list-content">
          <li onClick={toggleSearch}>Search</li>
          <div onMouseLeave={handleInvestClose} className="profile">
            <li onClick={handleInvestClick}>Fractional investment</li>
            {
              openInvest && <PropertiesDropDown handleInvestClick={handleInvestClick} margin={'1rem'} openInvest={openInvest}/>
            }
          </div>
          <li className='language-change'>
            Language -
            <ToggleLanguage/>
          </li>
        </ul>
        <span className="footer">Lamburghinie</span>
      </div>
    </ClickAwayListener>
  )
}

export default Sidebar