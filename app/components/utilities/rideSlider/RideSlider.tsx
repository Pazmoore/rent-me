'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '../imageSlider/image-slider.scss'
import './ride-slider.scss'

const RideSlider = ({images, width, height, card, index}: any) => {
  const maxDots = Math.min(images?.length, 5)
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="image-slider">
      <Image src='/images/general/arrow/left1-arrow.png' alt='img' width={30} height={30} onClick={prevSlide} className={`arrow arrow1 left ${card == index && 'show'} img-color`}/>
      <div className="slider slider1" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images?.map((image: string, i: number) => (
          <Image key={i} src={image} alt="img" className={`slide slide1 ${i === currentIndex && 'active'}`} width={width} height={height}/>
        ))}
      </div>
      <Image src='/images/general/arrow/right1-arrow.png' alt='img' width={30} height={30} onClick={nextSlide} className={`arrow arrow1 right ${card == index && 'show'} img-color`}/>
      <div className="dots dots1">
        {Array.from({length: maxDots}, (_, i) => (
          <span key={i} onClick={() => setCurrentIndex(i)} className={`dot ${i === currentIndex % maxDots && 'active'}`}></span>
        ))}
      </div>
    </div>
  )
}

export default RideSlider