import React from 'react'

const Reference = () => {
  return (
    <div className="single-reference">
      <div className="profile-img">
        <img src="references/jon.png" className='client-image' alt="" />
        <img src="references/quote.svg" className='quotation-mark' alt="" />
      </div>
      <div className="review-content">
        <p>His work as a frontend developer and designer is truly impressive. The attention to detail, creativity, and dedication he brings to every project result in a seamless and visually stunning user experience. The client couldn't be happier with the results and looks forward to collaborating with him on future projects.</p>
        <p className='reviewer'>Georg pupser - <span className="accent-text">agency 4 life</span></p>
      </div>

    </div>
  )
}

export default Reference