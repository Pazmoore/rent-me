'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import './image-slider.scss'

const ImageSlider = ({images, card, index}: any) => {
  const maxDots = Math.min(images?.length, 5)
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

  return (
    <div className="image-slider">
      <Image src='/images/general/arrow/left-arrow.png' alt='img' width={30} height={30} onClick={prevSlide} className={`arrow left img-color ${card == index  && 'show'}`}/>
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images?.map((image: string, i: number) => (
          <Image key={i} src={image} alt="img" className={`slide ${i === currentIndex && 'active'}`} width={300} height={300} style={{ minWidth:`100%`, minHeight:`100%` }}/>
        ))}
      </div>
      <Image src='/images/general/arrow/right-arrow.png' alt='img' width={30} height={30} onClick={nextSlide} className={`arrow right img-color ${card == index  && 'show'}`}/>
      <div className="dots">
        {Array.from({length: maxDots}, (_, i) => (
          <span key={i} onClick={() => setCurrentIndex(i)} className={`dot ${i === currentIndex % maxDots && 'active'}`}></span>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider