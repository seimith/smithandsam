import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

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
              <h4>16 HOURS<br/>PER MONTH</h4>
              <p>$720</p>
            </div>
          </div>
        </center>

        <center>
          <h1>Project Packages</h1>
          <div style={{ width: `100%`}}>
            <div className="pricing-box">
              <Link to="/package-website/">
                <h4>Website Package</h4>
                <p>$2,000+<br/><span class="learn-more">(Click to learn more)</span></p>
              </Link>
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
