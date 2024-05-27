'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { TrendingCards } from '@/app/interfaces/cards/cards'
import ImageCard from '../../utilities/imageCard/ImageCard'
import './trending-card.scss'

const TrendingCard = ({accommodation, cardContent, cardHeading, title, workspace}:
  {accommodation?: boolean, cardContent: TrendingCards[], cardHeading: Array<string>, title?: string, workspace?: boolean}
) => {
  const navigate = useRouter()
  const handleViewDetails = (id: string, productType: string) => navigate.push(`/products/1/details/${productType}/${id}`)
  return (
    <div className={`trending-card ${accommodation && 'accommodation'}`}>
      {
        accommodation && <p className="section-title section-title1">{cardHeading[0]}</p>
      }
      {
        !accommodation &&
        <div className="page-heading">
          <p className="page-title">{cardHeading[0]}</p>
          <p className="more">{cardHeading[1]}</p>
        </div>
      }
      <ImageCard cardContent={cardContent} handleViewDetails={handleViewDetails} title={title} scroll={true}/>
    </div>
  )
}

export default TrendingCard