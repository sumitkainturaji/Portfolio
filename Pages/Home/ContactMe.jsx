import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qs862fl',
        'template_q2e8nyq',
        form.current,
        '--_AFyNTZXXgfuZNE'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
          alert('Your message has been sent successfully!')
          form.current.reset()
        },
        (error) => {
          console.log('Failed to send email:', error.text)
          alert('Failed to send your message. Please try again later.')
        }
      )
      .catch((error) => {
        console.error('Error sending email:', error)
        alert('An unexpected error occurred. Please try again later.')
      })
  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact--me">Contact Me</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="from_name" className="contact--label">
            <span className="text-md"> Name</span>
            <input
              type="text"
              className="contact--input "
              placeholder="Enter your name"
              name="from_name"
              id="from_name"
              required
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="from_email" className="contact--label">
            <span className="text-md">Your Email</span>
            <input
              type="email"
              className="contact--input "
              placeholder="Enter your email"
              name="from_email"
              id="from_email"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input "
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
