import React from 'react'
import HomeCard from '../homeCard/HomeCard'
import { HomeCards } from '@/app/interfaces/cards/cards'
import TrendingCard from '../trendingCard/TrendingCard'
import { cardContent } from '../../productsDashboard/products/workspace/home/workSpaceData'

const Workspace = () => {
  const cardHeading = ['Explore Some Trending Workspace Around You', 'Discover more']
  const homeHeading = ['Find Workspace Nearby', 'Access best in class uniquely equipped Workspaces designed for professionals to deliver at maximum capacity.']
  const homeContent: HomeCards[] = [
    {
    id: '1',
    image: '/images/workspace/pics1.png',
    title: 'Co-working Space',
    stock: 12453
    },
    {
    id: '1',
    image: '/images/workspace/pics2.png',
    title: 'Conference Room',
    stock: 20
    },
    {
    id: '1',
    image: '/images/workspace/pics3.png',
    title: 'Private Workspace',
    stock: 100
    }
  ]

  return (
    <>
      <HomeCard homeContent={homeContent} homeHeading={homeHeading}/>
      <TrendingCard cardContent={cardContent} cardHeading={cardHeading} workspace={true}/>
    </>
  )
}

export default Workspace