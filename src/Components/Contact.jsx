import React from 'react'
import ContactOption from './ContactOption'

const Contact = () => {

  const classnames = [
    {
      containerClass:'',
      headline: 'the Phone',
      first: '',
      second: 'disabled',
      third: 'disabled',
      fourth: 'disabled'
    },
    {
      containerClass:'fav',
      headline: 'Skype',
      first: '',
      second: '',
      third: 'disabled',
      fourth: 'disabled'
    },
    {
      containerClass:'',
      headline: 'the Phone',
      first: '',
      second: '',
      third: '',
      fourth: ''
    }
  ]
  return (
    <section>
      <h2>Contact</h2>
      <div className="contact-options-container">
        {classnames.map((classnames, index) => {
          return <ContactOption key={index} classnames={classnames}/>
        })}
      </div>
    </section>
  )
}

export default Contact