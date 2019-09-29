import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center>
      <h1 style={{ paddingTop: `1em` }}>Hey there, nice to meet you.</h1>
      <p style={{ fontWeight: `100`, lineHeight: `2em`, letterSpacing: `0.1em`, fontSize: `0.8em`}}>
        If you're here, you're probaby an amazing woman who's trying to get stuff done in your life.
        We get it and we understand you, so don't worry. We're two sisters (Smith and Sam) that are here that want to help you.
        Combined, we can offer skills that range from administration, lab management, product management, and web development.
      </p>
      <p style={{ fontWeight: `100`, lineHeight: `2em`, letterSpacing: `0.1em`, fontSize: `0.8em`}}>
        Smith was a User Interface & User Experience Developer, and Sam was an oncology lab manager. <Link to="/about-us/">Learn more about us.</Link>
      </p>
    </center>
  </Layout>
)

export default IndexPage
