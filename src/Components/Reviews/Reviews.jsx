import React from 'react'
import Review from './Review'

const Reviews = () => {
  const reviews = [
    {
      img: 'references/codecool_logo.png',
      content: 'Jon possesses excellent design and presentation skills. His projects have a distinct visual appearance and a user friendly UI. The UI of his final project is structured clearly and well thought out. Moreover, when we were discussing how to implement a particular feature Jon took great care to consider the feature from the end users perspective. In addition, his presentations are clearly structured and well designed. He is able to convey complex topics and to break them down into simple terms.',
      author: 'Mark',
      company: 'Codecool Mentor',
      link:'https://codecool.com/at/'
    },
    {
      img: 'references/aap.png',
      content: 'Jon possesses excellent design and presentation skills. His projects have a distinct visual appearance and a user friendly UI. The UI of his final project is structured clearly and well thought out. Moreover, when we were discussing how to implement a particular feature Jon took great care to consider the feature from the end users perspective. In addition, his presentations are clearly structured and well designed. He is able to convey complex topics and to break them down into simple terms.',
      author: 'Melanie Zemsauer',
      company: 'allaboutperiod.',
      link:'https://www.allaboutperiod.com/'
    },
    {
      img: 'references/codecool_logo.png',
      content: 'Jon possesses excellent design and presentation skills. His projects have a distinct visual appearance and a user friendly UI. The UI of his final project is structured clearly and well thought out. Moreover, when we were discussing how to implement a particular feature Jon took great care to consider the feature from the end users perspective. In addition, his presentations are clearly structured and well designed. He is able to convey complex topics and to break them down into simple terms.',
      author: 'Codecool',
      company: 'Codecool',
      link: 'https://www.allaboutperiod.com/'
    }  
  ]
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