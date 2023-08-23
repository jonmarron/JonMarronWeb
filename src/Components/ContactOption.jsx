import React from 'react'

const ContactOption = ({classnames}) => {
  return (
    <div className={`contact-option ${classnames.containerClass}`}>
      {classnames.containerClass != '' && <div className="tag">popular</div>}
      <h3>Chat over <br/>{classnames.headline}</h3>
      <ul>
        <li className={classnames.first}>Hear my voice</li>
        <li className={classnames.second}>Look in my eyes</li>
        <li className={classnames.third}>Coffe or Tea</li>
        <li className={classnames.fourth}>Firm Handshake</li>
      </ul>
      <button>Book option</button>
    </div>
  )
}

export default ContactOption