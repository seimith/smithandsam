import PropTypes from "prop-types"
import React from "react"

const Pricing = ({ siteTitle, color }) => {
  return (
    <div style={{ background: color }}>
      <div className="ss-section">
        <center>
          <h1 className="ss-section-header">{siteTitle}</h1>
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
