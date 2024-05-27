'use client'
import React, { useEffect, useState } from 'react'
import { TrendingCards } from '@/app/interfaces/cards/cards'
import Bookings from '@/app/components/productsDashboard/productUtilities/bookings/Bookings'
import { hosts } from '@/app/components/productsDashboard/productUtilities/hostCard/hostData'
import { reviews } from '@/app/components/productsDashboard/productUtilities/reviewCard/reviewData'
import { cardContent } from '@/app/components/productsDashboard/products/workspace/home/workSpaceData'

const WorkspaceDetails = ({params} : {params: {q: string}}) => {
  const title = 'Similar Workspace'
  const [allHosts, setAllHosts] = useState(hosts)
  const [allReviews, setAllReviews] = useState(reviews)
  const [allWorkspace, setAllWorkspace] = useState(cardContent)
  const [selectedWorkspace, setSelectedWorkspace] = useState<TrendingCards>()

  useEffect(() => {
    const selected = allWorkspace.filter((data) => params.q[1] == data.id)
    setSelectedWorkspace(selected[0])
  }, [allWorkspace, params.q])

  return (
    <Bookings allHosts={allHosts} allReviews={allReviews} cardContent={cardContent} product={'workspace'} selectedBooking={selectedWorkspace} title={title}/>
  )
}

export default WorkspaceDetails