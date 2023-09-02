import React from 'react'
import Reference from './Reference'

const Quotes = () => {
  return (
    <section>
      <div className="text-content">
        <h2>Don't take my <span className="accent-text">word</span> for it</h2>
        <p>See what clients are saying about me and my work!</p>
      </div>
      <div className="references">
        <Reference/>
        <Reference/>
        <Reference/>
      </div>
    </section>
  )
}

export default Quotes