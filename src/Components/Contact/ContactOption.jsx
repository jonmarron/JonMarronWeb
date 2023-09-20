import React from 'react'

const ContactOption = ({ contactOption, message, setMessage, setModalVisible}) => {
  const handleOpenModal = e => {
    e.preventDefault();
    setMessage({
      ...message,
      message: contactOption.message
    })
    setModalVisible(true);
  }

  return (
    <div className={`contact-option ${contactOption.containerClass}`}>
      {contactOption.containerClass != '' && <div className="tag">popular</div>}
      <h3>{contactOption.headline1}<br/>{contactOption.headline2}</h3>
      <ul>
        <li className={contactOption.first}>Hear my voice</li>
        <li className={contactOption.second}>Look in my eyes</li>
        <li className={contactOption.third}>Coffee or Tea</li>
        <li className={contactOption.fourth}>Firm Handshake</li>
      </ul>
      <button onClick={handleOpenModal}>Book option</button>
    </div>
  )
}

export default ContactOption