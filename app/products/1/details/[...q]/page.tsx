'use client'
import React, { useEffect, useState } from 'react'
import { TrendingCards } from '@/app/interfaces/cards/cards'
import Bookings from '@/app/components/productsDashboard/productUtilities/bookings/Bookings'
import { hosts } from '@/app/components/productsDashboard/productUtilities/hostCard/hostData'
import { reviews } from '@/app/components/productsDashboard/productUtilities/reviewCard/reviewData'
import { cardContent } from '@/app/components/productsDashboard/products/accommodations/home/AccommodationsData'

const Accommodations = ({params} : {params: {q: string}}) => {
  const title = 'Similar Accommodation'
  const [allHosts, setAllHosts] = useState(hosts)
  const [allReviews, setAllReviews] = useState(reviews)
  const [allAccommodations, setAllAccommodations] = useState(cardContent)
  const [selectedAccommodation, setSelectedAccommodation] = useState<TrendingCards>()

  useEffect(() => {
    const selected = allAccommodations.filter((data) => params.q[1] == data.id)
    setSelectedAccommodation(selected[0])
  }, [allAccommodations, params.q])

  return (
    <Bookings allHosts={allHosts} allReviews={allReviews} cardContent={cardContent} product={'accommodations'} selectedBooking={selectedAccommodation} title={title}/>
  )
}

export default Accommodations