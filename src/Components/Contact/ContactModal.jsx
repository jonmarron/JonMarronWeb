import React, {useState} from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactModal = ({message, postMessage, setMessage, setModalVisible}) => {

  const [inputErrors, setInputErrors] = useState({});

  
  const validateInput = () => {
    const errors = {};
    if (message.email === ''){
      errors.email = 'E-mail is required.';
    }
    setInputErrors(errors);
    return Object.keys(errors).length === 0
  }
  
  const handleChange = e => {
    e.preventDefault();
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }
  
  const closeModal = e => {
    setModalVisible(false);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const isInputValid = validateInput();
    if(isInputValid){
      postMessage(message);
      setModalVisible(false);
    }
  }

  return (
    <section className='contact-modal' onClick={closeModal}>
      <div className="form-container" onClick={e => e.stopPropagation()}>
        <FontAwesomeIcon icon={faXmark} className='close-icon' onClick={closeModal}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          {inputErrors.email && <span className='error-message'>{inputErrors.email}</span>}
          <input type="text" name="email" id="email" className={inputErrors.email && 'error'} value={message.email} onChange={handleChange}/>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10" value={message.message} onChange={handleChange}></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </section>
    )
}

export default ContactModal