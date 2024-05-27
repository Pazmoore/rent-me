import React from 'react'
import TrendingCard from '../trendingCard/TrendingCard'
import { cardContent } from '../../productsDashboard/products/accommodations/home/AccommodationsData'

const Accommodation = () => {
  const cardHeading = ['Explore Top Tier Accommodations']
  return (
    <TrendingCard accommodation={true} cardContent={cardContent} cardHeading={cardHeading}/>
  )
}

export default Accommodation