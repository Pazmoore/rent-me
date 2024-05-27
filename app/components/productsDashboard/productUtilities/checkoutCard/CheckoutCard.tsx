import React from 'react'
import Link from 'next/link'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './checkout-card.scss'

const CheckoutCard = ({book, selected, showButton = true} : {book?: string, showButton?: boolean, selected: any}) => {
  return (
    <div id='Book Now' className='checkout-card'>
      ${selected?.price} {selected?.time}
      <div className='table'>
        <div className='row'>
          <div className='row1'>
            <span>Check in</span>
            <span>3/30/2024</span>
          </div>
          <div className='row2'>
            <span>Check out</span>
            <span>4/2/2024</span>
          </div>
        </div>
        <div className='guest'>
          <span>Guest</span>
          <ExpandMoreIcon/>
        </div>
      </div>
      <div className='pay'>
        <span>$30 x 4nights</span>
        <span>$120</span>
      </div>
      <div className='pay'>
        <span>Service Fee</span>
        <span>$10</span>
      </div>
      {
        showButton &&
        <Link href={`/products/checkout/${book}/${selected?.id}`}>
          <button >Book Now</button>
        </Link>
      }
      {
        !showButton &&
        <div className='total'>
          <span>Total</span>
          <span>$130</span>
        </div>
      }
    </div>
  )
}

export default CheckoutCard