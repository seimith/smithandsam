import PropTypes from "prop-types"
import React, { useState } from "react"

const Services = ({ siteTitle, color }) => {
  const SERVICE_NAME = {
    CUSTOMER: "customer",
    ADMIN: "admin",
    SOCIAL: "social",
    DEV: "dev",
    DES: "des",
    PROD: "prod",
  }
  const [toggleState, setToggleState] = useState("");
  const toggle = (event) => {
    setToggleState(toggleState !== event.target.dataset["name"] ? event.target.dataset["name"] : "");
  };
  return (
    <div style={{ background: color }} id="services">
      <div className="ss-section">
        <center>
          <h1 className="ss-section-header">{siteTitle}</h1>
        </center>

        <h3 data-name={SERVICE_NAME.ADMIN} onClick={ toggle }>Administrative Services
        { toggleState !== SERVICE_NAME.ADMIN ? " +" : " -" }
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

        <h3 data-name={SERVICE_NAME.CUSTOMER} onClick={ toggle }>Customer Services
        { toggleState !== SERVICE_NAME.CUSTOMER ? " +" : " -" }
         </h3>
        { toggleState === SERVICE_NAME.CUSTOMER ? <ul>
          <li>Answering phone calls and emails</li>
          <li>Responding to customer questions and complaints</li>
          <li>Walking customers through basic troubleshooting</li>
        </ul> : ""}

        <h3 data-name={SERVICE_NAME.DES} onClick={ toggle }>Design Services
        { toggleState !== SERVICE_NAME.DES ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.DES ? <ul>
          <li>Vector art ("Affinity Designer")</li>
          <li>Canva asset creation</li>
          <li>Raster photoshopping</li>
        </ul> : "" }

        <h3 data-name={SERVICE_NAME.PROD} onClick={ toggle }>Project Management
        { toggleState !== SERVICE_NAME.PROD ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.PROD ? <ul>
          <li>Plan and implement projects</li>
          <li>Help define project scope, goals and deliverables</li>
          <li>Define tasks and required resources</li>
          <li>Create schedule and project timeline</li>
          <li>Track deliverables</li>
        </ul> : "" }

        <h3 data-name={SERVICE_NAME.SOCIAL} onClick={ toggle }>Social Media Management
        { toggleState !== SERVICE_NAME.SOCIAL ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.SOCIAL ? <ul>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Pinterest</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>All of these include:
            <ul>
              <li>Account Setup</li>
              <li>Scheduled posts/video/tweets/likes</li>
              <li>Customer Engagements</li>
            </ul>
          </li>
        </ul> : "" }

        <h3 data-name={SERVICE_NAME.DEV} onClick={ toggle }>Website Development
        { toggleState !== SERVICE_NAME.DEV ? " +" : " -" }
        </h3>
        { toggleState === SERVICE_NAME.DEV ? <ul>
          <li>Develop mobile responsive website
            <ul>
              <li>React, HTML, CSS, Sass, Code Management in GitHub w/ pipeline to deploy to "Netlify")</li>
            </ul>
          </li>
          <li>Domain Setup</li>
          <li>Install and configure blog ("WordPress")</li>
          <li>Install eCommerce website ("Shopify")</li>
          <li>Customize WorkPress themes</li>
          <li>Design System Strategy
            <ul>
              <li>Application/Website UI auditing</li>
              <li>Component library planning</li>
              <li>Stylesheet guidelines</li>
            </ul>
          </li>
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
