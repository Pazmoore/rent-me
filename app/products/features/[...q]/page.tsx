'use client'
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Profile from "@/app/components/productsDashboard/features/profile/Profile"
import DitProfile from "@/app/components/productsDashboard/features/profile/DitProfile"
import Trending from "@/app/components/productsDashboard/features/trending/Trending"
import Messages from "@/app/components/productsDashboard/features/messages/Messages"
import Notifications from "@/app/components/productsDashboard/features/notifications/Notifications"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import './features.scss'

const Features = ({ params }: { params: { q: string } }) => {
  const navigate = useRouter()
  const [activeFeature, setActiveFeature] = useState("trending")
  useEffect(() => {
    setActiveFeature(params.q[0])
  }, [params.q])

  return (
    <div className="features">
      <div onClick={() => navigate.back()} className='navigate-back'>
        <ArrowBackIosIcon fontSize='small' className='navigate-back-icon'/>
        <span>Back</span>
      </div>
      {/* <p className="title">{activeFeature}</p> */}
      <section>
        {activeFeature == 'profile' && <Profile/>}
        {activeFeature == 'messages' && <Messages/>}
        {activeFeature == 'notifications' && <Notifications/>}
        {(activeFeature == 'trending' || activeFeature == 'favorites') && <Trending query={activeFeature}/>}
      </section>
    </div>
  )
}

export default Features