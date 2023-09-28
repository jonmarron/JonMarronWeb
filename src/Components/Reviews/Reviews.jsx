import React from 'react'
import Review from './Review'
import { reviews } from '../../data/websiteData'

const Reviews = () => {
  
  return (
    <section id="reviews">
      <div className="text-content">
        <h2>Don't take my <span className="accent-text">word</span> for it</h2>
        <p>See what clients are saying about me and my work!</p>
      </div>
      <div className="references">
        {reviews.map((review, index) =>{
          return (
            <Review key={index} review={review}/>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews