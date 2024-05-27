'use client'
import { useRouter } from 'next/navigation'
import RideCard from '../../utilities/rideCard/RideCard'
import './trending-ride-card.scss'

const TrendingRideCard = ({rideContent, rideHeading}: any) => {
  const navigate = useRouter()
  const handleViewDetails = (id: string) => {
    navigate.push(`/products/3/details/ride/${id}`)
  }

  return (
    <div className="trending-ride">
      <div className="page-heading">
        <p className="page-title">{rideHeading[0]}</p>
        <p className="more">{rideHeading[1]}</p>
      </div>
      <RideCard rideContent={rideContent} handleViewDetails={handleViewDetails} scroll={true}/>
    </div>
  )
}

export default TrendingRideCard
