import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"

import Services from "./services"
import Pricing from "./pricing"
import HowItWorks from "./how-it-works"
import ContactForm from "./contact-form"

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
    <div className="banner">
      <center>
        <span role="img" aria-label="Tada!">🎉</span> Now accepting clients! Contact us below.
      </center>
    </div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Layout>
      <SEO title="Consulting Agency" />
      <div className="ss-section">
        <center>
          <h1 className="ss-section-header">Hey there, nice to meet you.</h1>
        </center>
        <p>
          If you're here, you're probaby an amazing woman who's trying to get stuff done in your life.
          We get it and we understand you. We're two sisters (Smith and Sam) that want to help you.
        </p>
        <p>
          Combined, we can offer skills that range from administration, lab management, product management, and web development.
        </p>
        <p>
          Smith was a User Interface & User Experience Developer, and Sam was an Research Lab Manager.
        </p>
        <p>
          <Link to="/about-us/">Learn more about us.</Link>
        </p>
      </div>
    </Layout>
    <Services siteTitle="Services" color="#EADEE5" />
    <Pricing siteTitle="Price" color="#FFFFFF" />
    <HowItWorks siteTitle="How does this work?" color="#EADEE5" />
    <ContactForm siteTitle="Contact us for a consultation" color="#FFFFFF"/>
  </>
 )
}

export default IndexPage
