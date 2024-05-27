import React from 'react'
import { useRouter } from 'next/navigation'
import ImageCard from '@/app/components/utilities/imageCard/ImageCard'
import { favorites } from '../../products/workspace/home/workSpaceData'
import { cardContent } from '../../products/accommodations/home/AccommodationsData'
import './trending.scss'

const Trending = ({query} : {query: string}) => {  const navigate = useRouter()
  const handleViewDetails = (id: string, productType: string) => navigate.push(`/products/1/details/${productType}/${id}`)

  return (
    <ImageCard cardContent={query == 'trending' ? cardContent : favorites} handleViewDetails={handleViewDetails} scroll={false}/>
  )
}

export default Trending