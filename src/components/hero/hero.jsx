import React from "react"
import IntroAnimation from "../intro-animation/introAnimation"
import "./hero.styles.css"

function Hero() {
  return (
    <div className="hero__container">
      <IntroAnimation />
      <div className="hero__contact__note">
        <h2>For any proposal of collaboration, fell free to contact me.</h2>
      </div>
    </div>
  )
}

export default Hero
