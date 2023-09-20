import React, {useState} from 'react'
import ContactOption from './ContactOption'
import ContactModal from './ContactModal';
import {contactOptions} from '../../data/websiteData';
const Contact = () => {
  const postMessage = async(message) => {
    const response = await fetch('https://contactapi-production.up.railway.app/messages',{
    // const response = await fetch('http://contactapi-env.eba-fymxqptm.eu-north-1.elasticbeanstalk.com/messages',{
        method:'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
      }
    );
    const data = await response.json();
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState({
    email: '',
    message: ''
  })

 
  return (
    <section id='contact'>
      {modalVisible && <ContactModal postMessage={postMessage} message={message} setMessage={setMessage} setModalVisible={setModalVisible}/>}
      <h2>Contact</h2>
      <p>Choose an option to get in contact with me, <br/>type your email address and I will contact you as soon as I can!</p>
      <div className="contact-options-container">
        {contactOptions.map((contactOption, index) => {
          return <ContactOption key={index} message={message} setMessage={setMessage} contactOption={contactOption} setModalVisible={setModalVisible}/>
        })}
      </div>
    </section>
  )
}

export default Contact