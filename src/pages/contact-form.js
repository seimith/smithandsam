import PropTypes from "prop-types"
import React from "react"

const ContactForm = ({ siteTitle, color }) => {
  return (
    <div style={{ background: color }}>
      <div className="ss-section">
        <center>
          <h1 className="ss-section-header">{siteTitle}</h1>
          <p>Shoot us a message and we'll get back to you with a time for us to chat!</p>
          <form method="POST" action="https://formspree.io/seimith@gmail.com" className="contact">
            <input type="text" name="name" placeholder="Your name" /><br />
            <input type="email" name="email" placeholder="Your email" /><br />
            <input type="text" name="industry" placeholder="Your line of work" /><br />
            <div className="select-style">
              <select name="service">
                <option value="10-hours-450">10 hours per month - $450</option>
                <option value="16-hours-720">16 hours per month - $720</option>
                <option value="package-website-2,000">Website Package - starting at $2,000</option>
              </select>
            </div>
            <textarea name="message" placeholder="Message"></textarea><br/>
            <button type="submit">Contact Now</button>
          </form>
        </center>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  siteTitle: PropTypes.string,
}

ContactForm.defaultProps = {
  siteTitle: ``,
}

export default ContactForm
