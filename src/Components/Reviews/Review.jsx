import React from 'react'

const Review = ({review}) => {
  return (
    <div className="single-reference">
      <div className="profile-img">
        <img src={review.img} className='client-image' alt="" />
        <img src="references/quote.svg" className='quotation-mark' alt="" />
      </div>
      <div className="review-content">
        <p>{review.content}</p>
        <p className='reviewer'>{review.author} - <span className="accent-text"><a href={review.link} target="_blank">{review.company}</a></span></p>
      </div>

    </div>
  )
}

export default Review