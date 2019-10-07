import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Services from "../components/services"
import Pricing from "../components/pricing"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
return (
  <>
    <div className="banner"><center><span role="img">🎉</span> Now accepting clients! Scroll down to learn more about our services.</center></div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Layout>
      <SEO title="Home" />
      <div>
        <center><h1>Hey there, nice to meet you.</h1></center>
        <p style={{ fontWeight: `100`, lineHeight: `2em`, letterSpacing: `0.1em`, fontSize: `0.8em`}}>
          If you're here, you're probaby an amazing woman who's trying to get stuff done in your life.
          We get it and we understand you. We're two sisters (Smith and Sam) that want to help you.
        </p>
        <p style={{ fontWeight: `100`, lineHeight: `2em`, letterSpacing: `0.1em`, fontSize: `0.8em`}}>
          Combined, we can offer skills that range from administration, lab management, product management, and web development.
        </p>
        <p style={{ fontWeight: `100`, lineHeight: `2em`, letterSpacing: `0.1em`, fontSize: `0.8em`}}>
          Smith was a User Interface & User Experience Developer, and Sam was an Research Lab Manager.
        </p>
        <p><Link to="/about-us/">Learn more about us.</Link></p>
      </div>
    </Layout>
    <Services />
    <Pricing />
  </>
 )
}

export default IndexPage
