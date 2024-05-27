import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='product-footer'>
      <span>&#169;{new Date().getFullYear()} Lamburghinie, Inc.</span>
    </div>
  )
}

export default Footer