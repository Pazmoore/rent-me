import React from 'react'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import ShowMoreText from 'react-show-more-text'
import StarIcon from '@mui/icons-material/Star'
import { Host } from '@/app/interfaces/dashboard/review'
import '../reviewCard/review-card.scss'

const HostCard = ({hosts} : {hosts: Host[]}) => {
  return (
    <div className='review-card'>
      {
        hosts.map((host: Host, i: number) => (
          <div key={i} className='review'>
            <div className='heading'>
              <Avatar src={host.image} className="profile"/>
              <div className='title'>
                <span>Hosted by</span>
                <span className='name'>{host.name}</span>
              </div>
            </div>
            <div className='star'>
              <StarIcon fontSize='small' className="icon"/> <span className='time1'>({host.reviewCount} Reviews)</span>
              <Image src='/images/dashboard/general/star.svg' alt='star' width={30} height={30} className='icon icon2 img-color'/> <span className='time1'>{host.hostTime} years hosting</span>
            </div>
            <figure>
            <div className='star'>
              <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
              <span className='time1'>{host.location}</span>
            </div>

            </figure>
            <ShowMoreText
              lines={3}
              more='show more'
              less='show less'
              anchorClass='showMoreText'
              expanded={false}
            >
              <p className='text'>{host.description}</p>
            </ShowMoreText>
            <button>Contact Host</button>
          </div>
        ))
      }
    </div>
  )
}

export default HostCard