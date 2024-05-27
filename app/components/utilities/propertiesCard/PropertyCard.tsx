'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ImageSlider from '../imageSlider/ImageSlider'
import { PropertyCards } from '@/app/interfaces/cards/cards'
import CircularProgress from '@mui/material/CircularProgress'
import { authObservable, showAuth } from '../../auth/isAuth/Auth'
import '../imageCard/image-card.scss'
import './property-card.scss'

const PropertyCard = ({handleViewDetails, propertyContent, title = '', scroll}: {handleViewDetails: any, propertyContent: PropertyCards[], title?: string, scroll: boolean}) => {
  const rowRef = useRef<any>(null)
  const [index, setIndex] = useState(-1) // For showing image navigation arrows on mouse hover on card.
  const [isMovedLeft, setIsMovedLeft] = useState(false)
  const [isMovedRight, setIsMovedRight] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => setAuthenticated(auth))
    return () => authSubscription.unsubscribe()
  }, [])

  const handleScroll = (direction: any) => {
    setIsMovedLeft(true)
    setIsMovedRight(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current
      let scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

      if (scrollTo <= 0){
        // Ensure we don't scroll beyond the left end
        scrollTo = 0
        setIsMovedLeft(false)
        setIsMovedRight(true)
      }

      if (scrollTo >= scrollWidth - clientWidth){
        // Ensure we don't scroll beyond the right end
        scrollTo = scrollWidth - clientWidth
        setIsMovedLeft(true)
        setIsMovedRight(false)
      }
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const toggleFavorite = (id: string, favorite: boolean) => {
    if (!authenticated){
      showAuth('login')
      return
    }
  }
  const viewDetails = (e: any, id: string) => {
    if (e.target.classList.contains('arrow') || e.target.classList.contains('dot') || e.target.classList.contains('favorite1')){
      return
    }
    handleViewDetails(id)
  }

  return (
    <div className='image-card'>
      <div  className={`image-header ${!scroll && 'none'}`}>
        <span className={`${!title && 'opaque'}`}>{title}</span>
        <div className='arrow'>
          <Image src='/images/general/arrow/arrow-left.png' alt="img" width={30} height={30} onClick={() => handleScroll('left')} className={`left ${!isMovedLeft && 'hides'} img-color`}/>
          <Image src='/images/general/arrow/arrow-right.png' alt="img" width={30} height={30} onClick={() => handleScroll('right')} className={`${!isMovedRight && 'hides'} img-color`}/>
        </div>
      </div>

      <div className="cards">
        <div ref={rowRef} className={`${scroll ? 'card-scroll' : 'card'}`}>
          {
            propertyContent.map((content: PropertyCards, i: number) => (
              <div key={i} onClick={() => viewDetails(event, content.id)} onMouseEnter={() => setIndex(i)} onMouseLeave={() => setIndex(-1)} className="box box1">
                <div className='image'>
                  <ImageSlider card={i} index={index} images={content.images} width={25} height={15}/>
                  {
                    (authenticated && content.favorite) &&
                    <div className='bookmark'>
                      <Image width={20} height={20} src="/images/general/card/fav-save.png" alt="img" onClick={() => toggleFavorite(content.id, content.favorite)} className="favorite1"/>
                    </div>
                  }
                  {
                    (!authenticated || (authenticated && !content.favorite)) &&
                    <div className='bookmark'>
                      <Image width={20} height={20} src='/images/general/card/save.png' alt="img" onClick={() => toggleFavorite(content.id, content.favorite)} className="favorite1 img-color"/>
                    </div>
                  }
                </div>
                <div className="location">
                  <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
                  {content.location}
                </div>
                <div className="location locate">
                  <Image width={20} height={20} src='/images/general/card/money.png' alt="img" className="icon2 img-color"/>
                  ${content.valuation} Valuation
                </div>
                {
                  !content.full &&
                  <div className='progress'>
                    <div className='start'>
                      <p>Invest starting from</p>
                      <span>${content.price}</span>
                    </div>
                    <div className='invested'>
                      <div className='bar'>
                        <CircularProgress variant="determinate" value={100} size='small' className='circular fixed'/>
                        <CircularProgress variant="determinate" sx={{ position: 'absolute', left: 0 }} value={content.percentage} size='small' className={`circular ${content.percentage > 59 && 'full'}`}/>
                      </div>
                      {content.peopleInvested}K people invested
                    </div>
                  </div>
                }
                {
                  content.full &&
                  <div className='progress'>
                    <div className='start'>
                      <p>{content.peopleInvested}k people invested</p>
                      <span>Fully invested</span>
                    </div>
                    <div className='invested invested1'>Join our waitlist</div>
                  </div>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PropertyCard