import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import HeaderMini from "../components/header-mini"

const SecondPage = () => (
  <>
    <HeaderMini siteTitle='Smith & Sam' />
    <SEO title="About Us" />
    <div className="ss-section">
      <center>
        <h1 className="ss-section-header">More about us...</h1>
      </center>

      <h3>Smith</h3>
      <p>Smith studied Financial Mathematics, but decided that the actuarial life wasn't for her. So, her first job was as an Executive Assistant in Boston, MA.
      However, she fell in love and moved to San Francisco, and off she went to a programming bootcamp!</p>
      <p>After learning how to code, Smith ended up working in Design and Development. And while working as a
      User Experience Engineer, she taught workshops, spoke at conferences, and began leading teams that comprised of designers and engineers.
      </p>
      <p>Today, Smith still loves development and is deep in the trenches of Design Systems during the day, but by night she's making cold process soap and freelancing.</p>
      <br/><br/>
      <h3>Sam</h3>
      <p>Sam studied Neuroscience and spent 6 years in academia working at a Parkinson's Disease research lab, and
      then at an Alzheimer's Disease research lab as a Technical Research Assistant. There, she ran multiple projects at once and <a href="https://www.labmanager.com/business-management/2015/02/lab-inventory-management-guide" target="_blank" rel="noopener noreferrer">controlled the lab's inventory</a>. </p>
      <p>Sam took an adventurous turn outside of the laboratory and explored education through vocal narration for videos on
      scientific protocols. Her adventurous streak took her far from the world of research and into a different environment of
      customer service. </p>

      <p>She remains interested in biological sciences and wants to apply her wide arsenal of skills into productive products of sorts.</p>
      <p><Link to="/">Return to the homepage</Link></p>
    </div>
  </>
)

export default SecondPage
