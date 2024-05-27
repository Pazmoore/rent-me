import React from 'react'
import Image from 'next/image'
import { TrendingCards } from '@/app/interfaces/cards/cards'
import './share.scss'

const Share = ({handleShare, selected, share} : {handleShare: any, selected: TrendingCards, share: boolean}) => {
  return (
    <div onMouseLeave={handleShare} className={`dropdown share ${share && 'dropdown-active'}`}>
      <div className='heading'>
        <p>Share this {selected?.productType == 'accommodations' ? 'accommodation' : selected?.productType}</p>
        <span onClick={handleShare} className='back'>×</span>
      </div>
      <div className='details'>
        <Image src={selected?.images[0]} alt='img' width={100} height={50} className='rent'/>
        <div className='content'>
          <span className='title'>{selected?.title}</span>
          <span className='features'>2 guests • 2 bedrooms • 2 beds • 2 baths</span>
          <div className="location">
            <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
            {selected?.fullAddress} {selected?.location}
          </div>
        </div>
      </div>
      <button>
        <Image width={20} height={20} src='/images/general/card/share.svg' alt="img" className="icon1 img-color"/>
        Copy link
      </button>
    </div>
  )
}

export default Share