import React from "react"
import { Link } from "gatsby"
import "./header.styles.css"

function Header() {
  return (
    <div className="header__container">
      {/* <div className="header__logo">
        <Link to="/" className="logo__link">
          <h1>MILAN</h1>
          <h1>CIRKOVIC</h1>
        </Link>
      </div> */}
      <div className="header__menu">
        <Link className="header__link" to="/about">
          <div>about</div>
        </Link>
        <Link className="header__link" to="/projects/">
          <div>projects</div>
        </Link>
        <Link className="header__link" to="/contact/">
          <div>contact</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
