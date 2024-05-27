import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Share from '../share/Share'
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { DateRange, DayPicker } from 'react-day-picker'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import TrendingCard from '@/app/components/home/trendingCard/TrendingCard'
import { headerData, facilitiesData, addData } from '@/app/products/detailsData'
import HostCard from '@/app/components/productsDashboard/productUtilities/hostCard/HostCard'
import ReviewCard from '@/app/components/productsDashboard/productUtilities/reviewCard/ReviewCard'
import SearchFilter from '@/app/components/productsDashboard/productUtilities/searchFilter/SearchFilter'
import CheckoutCard from '@/app/components/productsDashboard/productUtilities/checkoutCard/CheckoutCard'
import '/public/typography/date-picker.scss'
import './bookings.scss'

const Bookings = ({allHosts, allReviews, cardContent, product, selectedBooking, title}: any) => {
  const [hover, setHover] = useState(-1)
  const [share, setShare] = useState(false)
  const handleShare = () => setShare(!share)
  const [activeTab, setActiveTab] = useState('Pictures')
  const scrollToSection = (id: string) => {
    setActiveTab(id)
    const section = document.getElementById(id)
    if (section){
      const yOffset = -150
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  const closeShare = () => setShare(false)
  const handleHover = (i: number) => setHover(i)

  return (
    <div className='bookings'>
      <Link href={`/products/${product}`} className='navigate-back'>
        <ArrowBackIosIcon fontSize='small' className='navigate-back-icon'/>
        <span>Back</span>
      </Link>
      <SearchFilter product={product}/>

      <div className='contents'>
        <div className="nav">
          {
            headerData.map((content, i) => (
              <div key={i} className={`content ${activeTab == content && "active"} ${content == 'Book Now' && "bold"}`} onClick={() => scrollToSection(content)}>
                {content}
              </div>
            ))
          }
        </div>

        <div id='Pictures' className='pictures'>
          <div className='heading'>
            <p>{selectedBooking?.title}</p>
            {/* <div onMouseLeave={closeShare}> */}
            <div>
              <figure>
                <Tooltip title={<Typography>Share</Typography>}>
                  <Image src='/images/general/card/upload.svg' alt='img' width={30} height={30} onClick={handleShare} className='img-color'/>
                </Tooltip>
                <Tooltip title={<Typography>Favorite</Typography>}>
                  <Image src='/images/general/card/heart.svg' alt='img' width={30} height={30} className='img-color'/>
                </Tooltip>
              </figure>
              {share && <Share handleShare={handleShare} selected={selectedBooking} share={share}/>}
            </div>
          </div>
          <div className='images'>
            <Image src={selectedBooking?.images[1] ?? ''} alt='img' width={800} height={700} className='bold-image'/>
            <figure className='all-images'>
              <div className='more hide'>
                <Image src={selectedBooking?.images[2] ?? ''} alt='img' width={300} height={200}/>
              </div>
              <div className='more'>
                <Image src={selectedBooking?.images[3] ?? ''} alt='img' width={300} height={200}/>       
                <Tooltip title={<Typography>View all</Typography>}>
                  <span className='count'>+{selectedBooking?.images.length}</span>
                </Tooltip>
              </div>
            </figure>
          </div>
        </div>

        <div className='description'>
          <div className='desc'>
            <div id='About' className='desc-header'>
              <p>{selectedBooking?.title}</p>
              <div className="rating">
                <Image width={15} height={15} src='/images/general/card/star.png' alt="img" className="star"/>
                <span>{selectedBooking?.rating}</span>
                <span>({selectedBooking?.totalRating}K)</span>
              </div>
            </div>
            {
              product == 'workspace `' ? <p className='features'>General workspace. 8AM-5PM</p> : <p className='features'>2 guests • 2 bedrooms • 2 beds • 2 baths</p>
            }
            <div className="location">
              <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
              {selectedBooking?.location}
            </div>
            <div className="location">
              <Image width={20} height={20} src='/images/general/card/calendar.png' alt="img" className="icon img-color"/>
              {selectedBooking?.availableFrom} - {selectedBooking?.availableTo}
            </div>
            <div id='Facilities' className='facilities'>
              <h2>Top Facilities</h2>
              <div className='facility'>
                {
                  facilitiesData.map((data, i) => (
                    <div key={i} className='amenity'>
                      <Image src={data.image} alt='img' width={40} height={40} className='img-color'/>
                      {data.title}
                    </div>
                  ))
                }
              </div>
              <button>See all</button>
            </div>
            {
              product == 'accommodations' &&
              <div className='sleep'>
                <h2>Where you will sleep</h2>
                <div className='stays'>
                  <div className='stay'>
                    <Image src='/images/dashboard/details/bed.svg' alt='img' width={40} height={40} className='img-color'/>
                    <p>Bedroom 1</p>
                    <span>1 King bed</span>
                  </div>
                  <div className='stay'>
                    <Image src='/images/dashboard/details/bed.svg' alt='img' width={40} height={40} className='img-color'/>
                    <p>Bedroom 1</p>
                    <span>1 King bed</span>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className='scroll'>
            <CheckoutCard book={product} selected={selectedBooking}/>
          </div>
        </div>

        <div>
          <h2>Add</h2>
          <div className='add'>
            {
              addData.map((data, i) => (
                <div key={i} className={`data ${(data.link == product) && 'hide'}`}>
                  <Image src={data.image} alt='img' width={40} height={40} onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(-1)}
                    className={` ${hover == i ? 'img-color1' : 'img-color'}`}
                  />
                  {data.title}
                </div>
              ))
            }
          </div>
        </div>

        <div className='locate'>
          <h2 className='position'>Where you will be</h2>
          <p>{selectedBooking?.fullAddress} {selectedBooking?.location}</p>
        </div>
        <div id='Calendar' className='locate'>
          <h2 className='position'>4 nights in {selectedBooking?.title}</h2>
          <p>Mar 30, 2024 - Apr 2, 2024</p>
          <DayPicker
            mode="range" numberOfMonths={2} showOutsideDays fromDate={new Date()} className='day'
            modifiersClassNames={{day: 'day', today: 'today'}}
          />
        </div>

        <div className='reviews'>
          <HostCard hosts={allHosts}/>
        </div>
        <div className='reviews'>
          <ReviewCard reviews={allReviews}/>
        </div>

        <div className='similar'>
          <TrendingCard cardContent={cardContent} cardHeading={[]} title={title}/>
        </div>  
      </div>
    </div>
  )
}

export default Bookings