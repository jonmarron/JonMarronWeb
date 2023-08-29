import React from 'react'

const MySocials = () => {
  return (
    <section>
      <div className="two-column-container">
        <div className="column image-column">
          <img src="moodImage.jpg" alt="" />
        </div>
        <div className="column text">
          <h2>Let's  <span className="accent-text">Connect!</span></h2>
          <div className="social-icons">
            <img src="Links/LinkedIn.svg" alt="" />
            <img src="Links/GitHub.svg" alt="" />
            <img src="Links/Codepen.svg" alt="" />
          </div>
          {/* <a href="http://localhost:5174" target='_blank'> */}
            <button className='disabled'>WORK IN PROGRESS</button>
          {/* </a> */}
        </div>
      </div>
    </section>
  )
}

export default MySocials