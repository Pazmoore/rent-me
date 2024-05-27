'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { propertyContent } from './propertiesData'
import PropertyCard from '../../utilities/propertiesCard/PropertyCard'
import './properties.scss'

const Properties = () => {
  const navigate = useRouter()
  const handleViewDetails = (id: string) => navigate.push(`/products/0/details/properties/${id}`)
  return (
    <div className="properties">
      <p className="section-title">Invest in Fractional Property in over 30,000 cities around the world</p>
      <PropertyCard handleViewDetails={handleViewDetails} propertyContent={propertyContent} scroll={true} title={'Start Investing Now'}/>
    </div>
  )
}

export default Properties