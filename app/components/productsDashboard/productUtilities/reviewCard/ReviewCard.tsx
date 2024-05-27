import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import ShowMoreText from 'react-show-more-text'
import { Review } from '@/app/interfaces/dashboard/review'
import './review-card.scss'
import AllReviews from './AllReviews'

const ReviewCard = ({reviews} : {reviews: Review[]}) => {
  const [show, setShow] = useState(false)
  const seeAll = () => setShow(!show)
  return (
    <>
      <div className='review-card'>
        {
          reviews.slice(0, 2).map((review: Review, i: number) => (
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
      {reviews.length > 2 && <button onClick={seeAll}className='see-all'>See all reviews</button>}
      {show && <AllReviews reviews={reviews} seeAll={seeAll}/>}
    </>
  )
}

export default ReviewCard