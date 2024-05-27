import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Products } from './categoriesData'
import { useRouter } from 'next/navigation'
import './categories-bar.scss'

const CategoriesBar = () => {
  const navigate = useRouter()
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
  const handleClick = (value: string) => navigate.push(`/products/${value}`)

  return (
    <div className='categoriesBar'>
      {
        isMovedLeft &&
        <Image src='/images/general/arrow/left-arrow.png' alt='img' width={30} height={30} onClick={() => handleScroll('left')} className='img-color'/>
      }
      <div className='product' ref={rowRef}>
        {
          Products.map((product, i) => (
            <span key={i} onClick={() => handleClick(product.link)}>
              {product.place}
            </span>
          ))
        }
      </div>
      {
        isMovedRight &&
        <Image src='/images/general/arrow/right-arrow.png' alt='img' width={30} height={30} onClick={() => handleScroll('right')} className='img-color'/>
      }
    </div>
  )
}

export default CategoriesBar