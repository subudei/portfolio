import React from "react"
import IntroAnimation from "../intro-animation/introAnimation"
import "./hero.styles.css"

function Hero() {
  return (
    <div className="hero__container">
      <IntroAnimation className="hero__animation" />

      <div className="scroll__icon">scroll</div>
    </div>

    // <div className="hero__contact__note">
    //   <h2>For any proposal of collaboration, fell free to contact me.</h2>
    // </div>
  )
}

export default Hero
