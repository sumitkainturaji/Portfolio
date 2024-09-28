import React from 'react'
import { Link } from 'react-router-dom'
export default function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('Contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sumit Singh Kaintura</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description desc">
            Eager to gain hands-on experience in web development and committed
            to continuous learning.
            <br /> Outside of work, I enjoy trading and traveling.
          </p>
        </div>

        <button className="btn btn-primary" onClick={handleScrollToContact}>
          Get In Touch
        </button>
      </div>

      <div className="hero--section--img">
        <img src="./images/profile.png" alt="Hero Section" />
      </div>
    </section>
  )
}
