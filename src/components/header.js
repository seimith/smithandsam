import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const SVG_SMITH = <svg data-v-d3f97b9e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.487178064043384 60">
    <g data-v-d3f97b9e="" id="a5ae9d7b-f4a0-4a7d-bfd2-17921ecd53cd" transform="matrix(0.6173803554330126,0,0,0.6173803554330126,-14.138011889799799,-0.9354393795902851)" stroke="none" fill="#240D1B">
      <path transform="scale(-1, 1) translate(-100, 0)" className="st0" d="M45.1 56.3c-.5-.3-1-.1-1.3.3-.1.2-.2.5-.1.7.1.2.2.5.4.6.2.1.3.1.5.1h.2c.2-.1.5-.2.6-.4.1-.2.2-.5.1-.7 0-.3-.1-.5-.4-.6zM44.4 53.2c.1-.2.2-.5.1-.7-.1-.2-.2-.5-.4-.6-.4-.3-1-.1-1.3.3-.1.2-.2.5-.1.7.1.2.2.5.4.6.2.1.3.1.5.1h.2c.3 0 .5-.2.6-.4zM48.4 53.6c-.4-.3-1-.1-1.3.3-.3.5-.1 1 .3 1.3.2.1.3.1.5.1h.2c.2-.1.5-.2.6-.4.1-.2.2-.5.1-.7 0-.3-.2-.5-.4-.6z"></path>
      <path transform="scale(-1, 1) translate(-100, 0)" className="st0" d="M71.8 23.7c-2.7-2.5-5.6-3.9-8.4-4.6.1-.2.2-.3.3-.5 2.9-4.8.5-11.5-5.3-15S45.6 1.1 42.7 5.9c-2.3 3.9-1.2 9 2.4 12.7h-.3c-16.9-4.3-15.9 9-14.4 14.2-.2 2.2-.4 4.8-.5 7.9l-7 13.5h7c.3 10.4 1.5 18 7.6 19.2 1.6.3 3.3.5 5.3.5 3.7 0 8.4-.8 15.2-3.8 7.3-3.2 12.8-8.9 15.6-15.9.5-1.1 1.2-3.2 2-6.1 1.9-7.9.9-20.1-3.8-24.4zm-42 29h-4.4l4.3-8.4v8.8c.1-.2.1-.3.1-.4zm27.5 15.9c-10.1 4.4-15.2 4-19.6 3.2-5.8-1.1-6.3-11.1-6.3-23.2 0-6.6.1-11.7.5-15.6 2.9-6.5 11.8-3.4 14.6-10.8.1-.2.1-.3.2-.5 2.9 2.2 5.7 10.5 7.2 12.7 4.5 6.7 16.9 11.1 18.8 17.3-2.4 7.5-7.9 13.6-15.4 16.9z"></path>
      <path transform="scale(-1, 1) translate(-100, 0)" className="st0" d="M37.8 47.6c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4zm0-3.1c-.4 0-.7.3-.7.7 0 .4.3.7.7.7s.7-.3.7-.7c.1-.4-.3-.7-.7-.7zM82 98.6c-1.5-5.9-5.6-14.2-16.1-14h-4.6c-.1-2.2-.3-4.1-.5-6.5-.2-2.4-.5-5.2-.8-9.2-.5.3-1 .5-1.6.7.3 3.7.5 6.3.8 8.7.2 2.3.4 4.1.5 6.3H44.2c-.1-.8-.2-1.6-.2-2.5-.2-2.4-.5-5.2-.8-9.2-.5.3-1 .5-1.6.7.3 3.7.5 6.3.8 8.7.1.8.2 1.6.2 2.4H40c-10.5-.2-14.5 8.1-16.1 14H82z"></path>
    </g>
  </svg>;

const SVG_SAM = <svg data-v-d3f97b9e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.427635608283566 60">
    <g data-v-d3f97b9e="" id="80a7ad0d-08be-4c7c-b9e9-91cebb281f9a" transform="matrix(0.6970440472431984,0,0,0.6970440472431984,-14.986449882447019,-8.380018641446938)" stroke="none" fill="#240D1B">
      <path className="st0" d="M43.7 54.8c-.5-.3-1-.1-1.3.3-.3.5-.1 1 .3 1.3.2.1.3.1.5.1h.2c.2-.1.5-.2.6-.4.1-.2.2-.5.1-.7 0-.3-.2-.5-.4-.6zM43 51.7c.1-.2.2-.5.1-.7-.1-.2-.2-.5-.4-.6-.5-.3-1-.1-1.3.3-.1.2-.2.5-.1.7.1.2.2.5.4.6.2.1.3.1.5.1h.2c.2 0 .5-.2.6-.4zM47 52.1c-.4-.3-1-.1-1.3.3-.1.2-.2.5-.1.7.1.2.2.5.4.6.2.1.3.1.5.1h.2c.2-.1.5-.2.6-.4.1-.2.2-.5.1-.7-.1-.3-.2-.5-.4-.6z"></path>
      <path className="st0" d="M75 35.3c-.6-4.6-2.1-8.6-4.2-11.1-3.1-3.6-7.6-5.8-12.4-6.9s-9.6-1.1-14.4-.9c-2.2.1-4.7.1-6.3-1.4-.8-.7-1.3-1.6-2.1-2.3-1.9-1.4-4.9-.5-6.3 1.5-1.3 2-2.6 5.1-1.9 7.4.2.8 0 2.8 2.5 4.5-.8 3.1-1.2 7.4-1.4 13.1l-7 13.5h7c.3 10.4 1.5 18 7.6 19.2 1.6.3 3.3.5 5.3.5 3.7 0 8.4-.8 15.2-3.8 3.1-1.4 5.9-3.2 8.3-5.4 1.7 1.2 3.6 2 5.9 2.1 7.6.5 13-3.3 14.9-8.4.1-.5 5.6-19.1-10.7-21.6zM28.4 51.2H24l4.3-8.4v8.8c.1-.1.1-.3.1-.4zm27.4 15.9c-10.1 4.4-15.2 4-19.6 3.2-5.7-1.1-6.2-11.2-6.2-23.2 0-9.6.3-16 1.3-20.1.7.3 1.4.6 2.3.9 4.5 1.3 12.3 1.6 16 4.3 4.4 3.3 5.5 22.3 13.9 30-2.2 1.9-4.8 3.6-7.7 4.9z"></path>
      <path className="st0" d="M36.4 46.1c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zm0-3.1c-.4 0-.7.3-.7.7 0 .4.3.7.7.7s.7-.3.7-.7c.1-.4-.3-.7-.7-.7zM80.6 98.1C79 92 75 83.4 64.5 83.6h-4.6c-.1-2.3-.3-4.3-.5-6.7-.2-2.5-.5-5.4-.8-9.5-.5.3-1 .5-1.6.8.3 3.8.5 6.6.8 9 .2 2.3.4 4.3.5 6.5H42.8c-.1-.8-.2-1.7-.2-2.6-.2-2.5-.5-5.4-.8-9.5-.5.3-1 .5-1.6.8.3 3.8.5 6.6.8 9 .1.9.2 1.7.2 2.5h-2.6C28 83.4 24 92 22.4 98.1h58.2z"></path>
    </g>
  </svg>;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#EADEE5`
    }}
  >
    <div className="two-ladies">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#240D1B`,
            textDecoration: `none`,
          }}
        >
          <center>
            <div style={{ paddingBottom: `0.5em` }}>{SVG_SMITH} {SVG_SAM}</div>
            <div style={{ fontFamily: `Prata`, fontSize: `2em`, fontWeight: `100`}}>
              {siteTitle}
            </div>
            <p style={{ fontFamily: `Times` }}>
              TWO LADIES ENABLING OTHER KICKASS LADIES TO REACH THEIR POTENTIAL.
            </p>
          </center>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
