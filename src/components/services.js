import PropTypes from "prop-types"
import React, { useState } from "react"

const Services = ({ siteTitle }) => {
  const SERVICE_NAME = {
    ADMIN: "admin",
    SOCIAL: "social",
    DEV: "dev",
    PROD: "prod",
  }
  const [toggleState, setToggleState] = useState("");
  const toggle = (event) => {
    setToggleState(toggleState != event.target.dataset["name"] ? event.target.dataset["name"] : "");
  };
  return (
    <div style={{ background: `#EADEE5` }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        <center><h1 style={{ paddingTop: `1em`, paddingBottom: `0.5em` }}>Services</h1></center>
        <h3 data-name={SERVICE_NAME.ADMIN} onClick={ toggle }>General Administrative Services
        { toggleState != SERVICE_NAME.ADMIN ? " +" : " -" }
         </h3>
        { toggleState === SERVICE_NAME.ADMIN ? <ul>
          <li>Audio transcription</li>
          <li>Brochure & flyer creation</li>
          <li>Calendar management</li>
          <li>Data entry</li>
          <li>Email correspondence & management</li>
          <li>Meeting and event coordination</li>
          <li>PowerPoint Presentations / Google Presentations</li>
          <li>Proofreading and editing documents</li>
          <li>Task management (Jira, Trello, Notion)</li>
          <li>Voicemail (check and screen)</li>
          <li>Word Processing / Google Doc</li>
          <li>Webinar Assistance</li>
        </ul> : ""}

        <h3 data-name={SERVICE_NAME.PROD} onClick={ toggle }>Project Management
        { toggleState != SERVICE_NAME.PROD ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.PROD ? <ul>
          <li>Plan and implement projects</li>
          <li>Help define project scope, goals and deliverables</li>
          <li>Define tasks and required resources</li>
          <li>Create schedule and project timeline</li>
          <li>Track deliverables</li>
        </ul> : "" }

        <h3 data-name={SERVICE_NAME.SOCIAL} onClick={ toggle }>Social Media Management
        { toggleState != SERVICE_NAME.SOCIAL ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.SOCIAL ? <ul>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Pinterest</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>* All of these include:</li>
          <ul>
            <li>Account Setup</li>
            <li>Scheduled posts/video/tweets/likes</li>
            <li>Customer Engagements</li>
          </ul>
        </ul> : "" }

        <h3 data-name={SERVICE_NAME.DEV} onClick={ toggle }>Website Development
        { toggleState != SERVICE_NAME.DEV ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.DEV ? <ul>
          <li>Setup mobile responsive website</li>
            <ul>
              <li>Codified website (React, HTML, CSS, Sass, Code Management in GitHub w/ pipeline to deploy to Netlify)</li>
            </ul>
          <li>Domain Setup</li>
          <li>Install and configure blog system (WordPress)</li>
          <li>Install and eCommerce website (Shopify)</li>
          <li>Customize WorkPress themes</li>
        </ul> : "" }

      </div>
    </div>
  )
}

Services.propTypes = {
  siteTitle: PropTypes.string,
}

Services.defaultProps = {
  siteTitle: ``,
}

export default Services
