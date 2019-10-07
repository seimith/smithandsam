import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderMini from "../components/header-mini"

const SecondPage = () => (
  <>
    <HeaderMini siteTitle='Smith & Sam' />
    <Layout>
      <SEO title="About Us" />
      <center><h1 style={{ paddingTop: `1em`, paddingBottom: `0.5em` }}>So you want to learn more about us...</h1></center>

      <h3>Smith</h3>
      <p>Smith studied Financial Mathematics, but decided that the investment banking and actuarial world wasn't for her. In fact,
      her first job was as an Executive Assistant. However, that wasn't as fulfilling, so off she went to a coding bootcamp!</p>
      <p>After learning how to code, Smith ended up working in Design and Engineering. While working as a
      developer, Smith taught workshops, spoke at conferences, and began leading teams that comprised of designers, engineers, and quality
      assurance analysts.
      </p>
      <p>Today, Smith still loves development and is deep in the trenches of Design Systems during the day, and by night she's freelancing.</p>
      <br/><br/>
      <h3>Sam</h3>
      <p>Sam studied Psychology & Biology and spent 6 years in academia working at a Parkinson's Disease research lab. As a lab manager, Sam was
      in charge of...</p>
      <p><Link to="/">Return to the homepage</Link></p>
    </Layout>
  </>
)

export default SecondPage
