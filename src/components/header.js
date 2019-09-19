import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/main-logo.svg"

const Header = ({ siteTitle }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuState = isMenuOpen ? "open" : "";

  return (
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
        <div className="desktop-nav-items">
          <Link className="header-link" to="/services">How Can We Help</Link>
          <Link className="header-link" to="/team">Our Team</Link>
          <a href="#contact"  style={{ marginLeft: `30px`, height: `40px` }} className="btn-secondary contact">Contact Us</a>
        </div>
        <div id="mobile-nav-icon" className={menuState} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="mobile-menu" className={menuState}>
          <Link className="header-link" to="/">Home</Link>
          <Link className="header-link" to="/services">Services</Link>
          <Link className="header-link" to="/team">Our Team</Link>
          <a className="header-link" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#contact">Contact</a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
