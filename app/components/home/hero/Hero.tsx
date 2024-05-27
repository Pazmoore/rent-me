'use client'
import React, { useState } from 'react'
import './hero.scss'
import Image from 'next/image'
import CategoriesBar from '../categoriesBars/CategoriesBar'

const Hero = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false)
  return (
    <div className='hero'>
      <p>Where Are You <span>Going Today?</span></p>
      <CategoriesBar/>
      <div className="pics">
        <div className={`pic ${fullScreen && 'full hide1'}`}>
          <div onClick={() => setFullScreen(!fullScreen)} className="line"></div>
        </div>
        <div className={`map ${fullScreen && 'hide full1'}`}>
          <Image src="/images/home/map.png" alt="img" width={1000} height={1000}/>
          <div onClick={() => setFullScreen(!fullScreen)} className="line line1"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero