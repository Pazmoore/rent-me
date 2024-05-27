import React from 'react'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import ShowMoreText from 'react-show-more-text'
import { Review } from '@/app/interfaces/dashboard/review'
import './all-reviews.scss'
import './review-card.scss'

const AllReviews = ({reviews, seeAll} : {reviews: Review[], seeAll: any}) => {
  return (
    <div className='all-reviews'>
      <div onClick={seeAll} className='close'></div>
      <div className='review-card'>
        <p>All Reviews</p>
        <span onClick={seeAll}>×</span>
        {
          reviews.map((review: Review, i: number) => (
            <div key={i} className='review'>
              <div className='heading'>
                <Avatar src={review.image} className="profile"/>
                <div className='title'>
                  <span className='name'>{review.name}</span>
                  <span>{review.location}</span>
                </div>
              </div>
              <div className='star'>
                <Rating name='read-only' value={review.rating} precision={0.5} readOnly/> •
                <span className='time'>{review.time}</span>
              </div>
              <ShowMoreText
                lines={3}
                more='read more'
                less='read less'
                anchorClass='showMoreText'
                expanded={false}
              >
                <p className='text'>{review.review}</p>
              </ShowMoreText>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllReviews