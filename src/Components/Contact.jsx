import React, {useState} from 'react'
import ContactOption from './ContactOption'
import ContactModal from './ContactModal';

const Contact = () => {
  const postMessage = async(message) => {
    const response = await fetch('http://contactapi-env.eba-fymxqptm.eu-north-1.elasticbeanstalk.com/messages',{
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

  const classnames = [
    {
      containerClass:'',
      headline: 'the phone',
      first: '',
      second: 'disabled',
      third: 'disabled',
      fourth: 'disabled',
      message: 'Let\'s talk over the phone!'
    },
    {
      containerClass:'fav',
      headline: 'Google meet',
      first: '',
      second: '',
      third: 'disabled',
      fourth: 'disabled',
      message: 'Let\'s talk over Google Meet!'
    },
    {
      containerClass:'',
      headline: 'a drink',
      first: '',
      second: '',
      third: '',
      fourth: '',
      message: 'Let\'s talk over a drink!'
    }
  ]
  return (
    <section id='contact'>
      {modalVisible && <ContactModal postMessage={postMessage} message={message} setMessage={setMessage} setModalVisible={setModalVisible}/>}
      <h2>Contact</h2>
      <p>Choose an option to get in contact with me, <br/>type your email address and I will contact you as soon as I can!</p>
      <div className="contact-options-container">
        {classnames.map((classnames, index) => {
          return <ContactOption key={index} message={message} setMessage={setMessage} classnames={classnames} setModalVisible={setModalVisible}/>
        })}
      </div>
    </section>
  )
}

export default Contact