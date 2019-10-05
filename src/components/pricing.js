import PropTypes from "prop-types"
import React, { useState } from "react"

const Pricing = ({ siteTitle }) => {
  const [toggleState, setToggleState] = useState("");
  const toggle = (event) => {
    // setToggleState(toggleState != event.target.dataset["name"] ? event.target.dataset["name"] : "");
  };
  return (
    <div style={{ background: `#FFFFFF` }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        <center>
          <h1 style={{ paddingTop: `1em`, paddingBottom: `0.5em` }}>Pricing with 1 Month Retainer</h1>
          <div style={{ width: `100%`}}>
            <div className="pricing-box">
                <h4 onClick={ toggle }>8 HOURS PER MONTH</h4>
                <p>$440</p>
            </div>
            <div className="pricing-box">
                <h4 onClick={ toggle }>12 HOURS PER MONTH</h4>
                <p>$660</p>
            </div>
            <div className="pricing-box">
                <h4 onClick={ toggle }>16 HOURS PER MONTH</h4>
                <p>$880</p>
            </div>
          </div>
        </center>
        <h3 style={{ paddingTop: `1em`, paddingBottom: `0.5em` }}>How does this work?</h3>
        <ol>
          <li>We have a 30 - 45 minutes conversation.</li>
          <li>We decide how many hours you need us.</li>
          <li>We scope out goals and a create a timeline.</li>
          <li>We give you a contract.</li>
          <li>Then, we're off to the races!</li>
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
