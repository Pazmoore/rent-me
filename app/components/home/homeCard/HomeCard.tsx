'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import './home-card.scss'

const HomeCard = ({homeContent, homeHeading, ride}: any) => {
  const rowRef = useRef<any>(null)
  const [isMovedLeft, setIsMovedLeft] = useState(false)
  const [isMovedRight, setIsMovedRight] = useState(true)

  const handleScroll = (direction: any) => {
    setIsMovedLeft(true)
    setIsMovedRight(true)
    if (rowRef.current){
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

  return (
    <div className="home-card">
      <p className={`section-title ${ride && 'ride-title'}`}>{homeHeading[0]}</p>
      {
        homeHeading.length > 1 &&
        <p className="section-desc section-desc1">{homeHeading[1]}</p>
      }
      <div className="navigate">
        <Image width={30} height={30} src='/images/general/arrow/arrow-left.png' alt="img" onClick={() => handleScroll('left')} className={`left ${!isMovedLeft && 'hide'} img-color`}/>
        <Image width={30} height={30} src='/images/general/arrow/arrow-right.png' onClick={() => handleScroll('right')} alt="img" className={`${!isMovedRight && 'hide'} img-color`}/>
      </div>
      <div className="box">
        <div ref={rowRef} className="pics">
          {
            homeContent.map((content: any, i: number) => (
              <div key={i} className={`pic ${ride && 'ride'}`}>
                <Image width={500} height={400} src={content.image} alt="img"/>
                <span className="title">{content.title}</span>
                <span className="stock">{content.stock} Available</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeCard