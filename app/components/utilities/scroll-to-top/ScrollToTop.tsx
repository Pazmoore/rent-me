'use client'
import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './scroll-to-top.scss'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const handleScroll = () => window.scrollY > 300 ? setVisible(true) : setVisible(false)

  const scrollToPageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <>{visible && <KeyboardArrowUpIcon fontSize='large' onClick={scrollToPageTop} className="scroll-to-top"/>}</>
}

export default ScrollToTop