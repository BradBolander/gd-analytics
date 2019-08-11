import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/main-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      background: `white`,
      height: `64px`
    }}
  >
    <div className="header-wrap">
      <Link className="header-logo" to="/">
        <img  src={Logo} />
      </Link>
      <Link className="header-link" to="/">How Can We Help</Link>
      <Link className="header-link" to="/">Our Team</Link>
      <Link to="/" style={{ marginLeft: `30px`, height: `40px` }} className="btn-secondary">Contact Us</Link>
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
