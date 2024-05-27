'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TrendingCards } from '@/app/interfaces/cards/cards'
import { authObservable, showAuth } from '../../auth/isAuth/Auth'
import ImageSlider from '../../utilities/imageSlider/ImageSlider'
import './image-card.scss'

const ImageCard = ({cardContent, handleViewDetails, title = '', scroll}: {title?: string, cardContent: TrendingCards[], handleViewDetails: any, scroll: boolean}) => {
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
  const viewDetails = (e: any, id: string, productType: string) => {
    if (e.target.classList.contains('arrow') || e.target.classList.contains('dot') || e.target.classList.contains('favorite')){
      return
    }
    handleViewDetails(id, productType)
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
            cardContent?.map((content: any, i: number) => (
              <div key={i} onClick={() => viewDetails(event, content.id, content.productType)} onMouseEnter={() => setIndex(i)} onMouseLeave={() => setIndex(-1)} className="box">
                <div className="image">
                  <ImageSlider card={i} index={index} images={content.images}/>
                  {
                    (authenticated && content.favorite) &&
                    <Image width={20} height={20} src="/images/general/card/fav-heart.svg" alt="img" onClick={() => toggleFavorite(content.id, content.favorite)} className="favorite"/>
                  }
                  {
                    (!authenticated || (authenticated && !content.favorite)) &&
                    <Image width={20} height={20} src='/images/general/card/heart.svg' alt="img" onClick={() => toggleFavorite(content.id, content.favorite)} className="favorite img-color"/>
                  }
                </div>
                <div className="heading">
                  {content.title}
                  <div className="rating">
                    <Image width={15} height={15} src='/images/general/card/star.png' alt="img" className="star"/>
                    <span>{content.rating}</span>
                    <span>({content.totalRating}K)</span>
                  </div>
                </div>
                <div className="price">${content.price} {content.time}</div>
                <div className="location">
                  <Image width={20} height={20} src='/images/general/card/calendar.png' alt="img" className="icon img-color"/>
                  {content.availableFrom} - {content.availableTo}
                </div>
                <div className="location">
                  <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
                  {content.location}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ImageCard