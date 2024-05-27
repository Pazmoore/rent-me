import React from 'react'
import Image from 'next/image'
import TrendingCard from '../trendingCard/TrendingCard'
import { cardContent } from '../../productsDashboard/products/accommodations/home/AccommodationsData'
import '../about/about.scss' // Reuse about component styles

const Services = () => {
  const cardHeading = ['Trending Deals', 'Discover more']
  return (
    <>
      <div className="about services">
        <p className="section-title">Other Services</p>
        <p className="section-desc">Access best in class uniquely equipped Workspaces designed for professionals to deliver at maximum capacity.</p>
        <div className="box">
          <div className="pics">
            <div className="pic">
              <Image width={400} height={500} src="/images/services/pics1.png" alt="img"/>
              <p>Events Gardens & Venues</p>
              </div>
              <div className="pic">
              <Image width={400} height={500} src="/images/services/pics2.png" alt="img"/>
              <p>State-of-the-art Gyms</p>
              </div>
              <div className="pic">
              <Image width={400} height={500} src="/images/services/pics3.png" alt="img"/>
              <p>Explore Boat cruises</p>
            </div>
          </div>
        </div>
      </div>
      <TrendingCard cardContent={cardContent} cardHeading={cardHeading}/>
    </>
  )
}

export default Services