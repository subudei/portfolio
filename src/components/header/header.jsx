import React from "react"
import "./header.styles.css"

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <h1>MILAN</h1>
        <h1>CIRKOVIC</h1>
      </div>
      <div className="header__menu">
        <div className="header__link">about</div>
        <div className="header__link">projects</div>
        <div className="header__link">contact</div>
      </div>
    </div>
  )
}

export default Header
