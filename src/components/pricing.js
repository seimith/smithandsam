import PropTypes from "prop-types"
import React from "react"

const Pricing = ({ siteTitle }) => {
  return (
    <div style={{ background: `#FFFFFF` }}>
      <div className="section">
        <center>
          <h1>Pricing with 1 Month Retainer</h1>
          <div style={{ width: `100%`}}>
            <div className="pricing-box">
                <h4>10 HOURS<br/>PER MONTH</h4>
                <p>$450</p>
            </div>
            <div className="pricing-box">
                <h4>12 HOURS<br/>PER MONTH</h4>
                <p>$540</p>
            </div>
            <div className="pricing-box">
                <h4>16 HOURS<br/>PER MONTH</h4>
                <p>$720</p>
            </div>
          </div>
        </center>

        <center>
          <h1>Project Packages</h1>
          <div style={{ width: `100%`}}>
            <div className="pricing-box">
                <h4>Static Website<br/>(5 pages)</h4>
                <p>$2,000+</p>
            </div>
            <div className="pricing-box">
                <h4>Wordpress Blog<br/>(5 addons)</h4>
                <p>$2,000+</p>
            </div>
          </div>
          <h3 style={{ paddingTop: `1em`, paddingBottom: `0.5em` }}>How does this work?</h3>
        </center>
        <ol>
          <li>
            <strong>We'll have a 30 minute consultation call</strong>
            <ul>
              <li>We’ll meet on Zoom or Google Hangout to figure out what your needs are.</li>
              <li>We'll decide how many hours you need us.</li>
              <li>Scope out tasks and goals.</li>
              <li>Decide on a start date and end date.</li>
              <li>Agree on hours of work and a payment plan.</li>
            </ul>
          </li>
          <li><strong>We'll send you a contract.</strong></li>
          <li><strong>Then, we're off to the races!</strong></li>
        </ol>
      </div>
    </div>
  )
}

Pricing.propTypes = {
  siteTitle: PropTypes.string,
}

Pricing.defaultProps = {
  siteTitle: ``,
}

export default Pricing
