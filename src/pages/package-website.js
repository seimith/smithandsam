import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import HeaderMini from "../components/header-mini"

const PackageWebsite = () => (
  <>
    <HeaderMini siteTitle='Smith & Sam' />
    <SEO title="About Us" />
    <div className="ss-section" style={{maxWidth: `1600px`}}>
      <center>
        <h1 className="ss-section-header">Website Package Pricings</h1>

        <div class="package-website-pricing-box">
          <center><h2>Basic</h2></center>
          <ul>
            <li>Domain Registration</li>
            <li>3 pages</li>
            <li>3 email addresses</li>
            <li>WordPress blog</li>
            <li><s>Mobile Responsive</s></li>
            <li><s>Accessibility</s></li>
            <li><s>Favicon</s></li>
            <li>SEO</li>
            <li>Customized Theme w/ 2 Iterations (designs provided by you)</li>
            <li>1 hours of support per week</li>
          </ul>
          <center>
            <h4>$900 single payment</h4>
            <div className="price-sep"><h3>or</h3></div>
            <h4>$75 per month for 1 year</h4>
          </center>
        </div>

        <div class="package-website-pricing-box">
          <center><h2>Professional</h2></center>
          <ul>
            <li>Domain Registration</li>
            <li>5 pages</li>
            <li>5 email addresses</li>
            <li>WordPress blog and/or eCommerce Setup</li>
            <li>Mobile Responsive</li>
            <li>Accessibility</li>
            <li>Favicon</li>
            <li>SEO</li>
            <li>Customized Theme w/ 4 Iterations (designs provided by you)</li>
            <li>3 hours of support per week</li>
          </ul>
          <center>
            <h4>$2,700 single payment</h4>
            <div className="price-sep"><h3>or</h3></div>
            <h4>$225 per month for 1 year</h4>
          </center>
        </div>

        <div class="package-website-pricing-box">
          <center><h2>Premium</h2></center>
          <ul>
            <li>Domain Registration</li>
            <li>Unlimited pages</li>
            <li>Unlimited email addresses</li>
            <li>WordPress blog and/or eCommerce Setup</li>
            <li>Mobile Responsive</li>
            <li>Accessibility</li>
            <li>Favicon</li>
            <li>SEO</li>
            <li>Customized Theme w/ Unlimited Iterations (designs provided by you)</li>
            <li>6 hours of support per week</li>
          </ul>
          <center>
            <h4>$5,400 single payment</h4>
            <div className="price-sep"><h3>or</h3></div>
            <h4>$450 per month for 1 year</h4>
          </center>
        </div>
      </center>
      <br/><br/>

      <p><Link to="/">Return to the homepage</Link></p>
    </div>
  </>
)

export default PackageWebsite
