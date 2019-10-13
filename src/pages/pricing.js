import PropTypes from "prop-types"
import React from "react"

const Pricing = ({ siteTitle, color }) => {
  return (
    <div style={{ background: color }}>
      <div className="ss-section">
        <center>
          <h1 className="ss-section-header">Pricing with 1 Month Retainer</h1>

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
        </center>
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
