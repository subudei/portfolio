import React from "react"
import "./header.styles.css"

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <h1>M C</h1>
      </div>
      <div className="header__menu">
        <div className="header__link">About</div>
        <div className="header__link">Projects</div>
        <div className="header__link">Contact</div>
      </div>
    </div>
  )
}

export default Header
