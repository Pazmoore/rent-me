'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { showAuth } from '../../auth/isAuth/Auth'
import { showProperties } from './showProperties'
import PropertyCard from '../propertiesCard/PropertyCard'
import { ViewPropertiesData } from './viewPropertiesData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { propertyContent } from '../../home/properties/propertiesData'
import './view-properties.scss'

const ViewProperties = () => {
  const navigate = useRouter()
  const [activeTab, setActiveTab] = useState('apartment')
  const tabClick = (tab: string) => {
    setActiveTab(tab)
  }
  const handleClose = () => showProperties(false)
  const handleLogin = () => {
    handleClose()
    showAuth('login')
  }
  const handleViewDetails = (id: string) => navigate.push(`/products/0/details/properties/${id}`)

  return (
    <div className='invest'>
      <div onClick={handleClose} className='close'></div>
      <div className='view'>
        <div className="view-header">
          <div className='heading'>
            {
              ViewPropertiesData.map((content, i) => (
                <div key={i} className={`content ${ activeTab == content.link && "active"}`} onClick={() => tabClick(content.link)}>
                  {content.content}
                </div>
              ))
            }
          </div>
        </div>
        <div className='view-now'>
          <div className='proceed'>
            <div onClick={handleClose} className='navigate-back'>
              <ArrowBackIosIcon fontSize='small' className='navigate-back-icon'/>
              <span>Back</span>
            </div>
            <div onClick={handleLogin} className='continue'>
              <Image src='/images/general/auth/signIn.svg' alt="img" width={30} height={30} className="sign-img img-color"/>
              Sign in to continue
            </div>
          </div>
          <PropertyCard handleViewDetails={handleViewDetails} propertyContent={propertyContent} scroll={false}/>
        </div>
      </div>
    </div>
  )
}

export default ViewProperties