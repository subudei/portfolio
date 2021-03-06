import React, { useEffect } from "react"
import "./hero.styles.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown"
import { CgMouse } from "@react-icons/all-files/cg/CgMouse"
import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"

import IntroAnimation from "../intro-animation/introAnimation"

import Programmer from "../../assets/programmer.inline.svg"
// import CodeScreen from "../../assets/code.inline.svg"

function Hero() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(".scroll__arrows", {
      duration: 1,
      y: "3vh",
      repeat: -1,
      yoyo: true,
    })
    gsap.to(".contact__ball", {
      scrollTrigger: {
        trigger: ".contact__ball",
        start: "top top",
        toggleActions: "restart none none reset",
      },
      top: "90vh",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    gsap.from(".hero__svg", {
      delay: 1,
      opacity: 0,
      scale: 0.6,
      duration: 1,
    })
  }, [])

  return (
    <div className="hero__container">
      <IntroAnimation className="hero__animation" />
      <div className="hero__logo">
        <Link to="/" className="logo__link">
          <h1>MILAN</h1>
          <h1>CIRKOVIC</h1>
        </Link>
      </div>
      <div className="scroll__icon">
        {/* <h3 className="scroll__h3">scroll</h3> */}
        <CgMouse className="scroll__mouse" />
        <FaAngleDoubleDown className="scroll__arrows" />
      </div>
      <div className="hero__svg">
        <Programmer className="svg__style">
          <a href="https://storyset.com/work" target="_blank">
            Illustration by Freepik Storyset
          </a>
        </Programmer>
      </div>
      <div className="contact__ball">
        <a
          className="contact__ball__mail"
          href="mailto:milan_cirkovic@yahoo.com"
          target="_blank"
        >
          <BiEnvelope className="contact__icon" />
        </a>
      </div>
      {/* <a href="https://storyset.com/work">Illustration by Freepik Storyset</a> */}
    </div>

    // <div className="hero__contact__note">
    //   <h2>For any proposal of collaboration, fell free to contact me.</h2>
    // </div>
  )
}

export default Hero
