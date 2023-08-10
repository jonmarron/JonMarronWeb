import React from 'react'

const ToolAccess = () => {
  return (
    <section>
      <div className="two-column-container">
        <div className="column image-column">
          <img src="moodImage.jpg" alt="" />
        </div>
        <div className="column text">
          <h2>Keep an eye over <br/>your <span className="accent-text">ongoing <br/>projects</span> with:</h2>
          <img src="LogoVertical.svg"  id='logo'/>
          <ul>
            <li>Create Project Briefings</li>
            <li>Add small tasks to your project</li>
            <li>Easily give feedback</li>
            <li>Edit the project's status any time</li>
          </ul>
          <a href="http://localhost:5174" target='_blank'>
            <button>Access now</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ToolAccess