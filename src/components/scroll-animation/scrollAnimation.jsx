import React, { useEffect } from "react"
import "./scrollAnimation.style.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "../hero/hero"
import About from "../../pages/about"
import Projects from "../../pages/projects"
import Contact from "../../pages/contact"

function ScrollAnimation() {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(".about__scroll", { yPercent: 100 })
    tl.from(".projects__scroll", { xPercent: 100 })
    tl.from(".contact__scroll", { xPercent: -100 })
    ScrollTrigger.create({
      animation: tl,
      trigger: ".scroll__container",
      start: "top top",
      end: "+=4000",
      // markers: true,
      scrub: true,
      pin: true,

      // snap: {
      //   snapTo: ["0%", "100%", "200%", "300%", "400%"],
      //   duration: 0.5,
      // },
      anticipatePin: 1,
    })
  }, [])

  return (
    <div className="scroll__container">
      <div className="home__scroll">
        <Hero />
      </div>
      <div className="about__scroll">
        <About />
      </div>
      <div className="projects__scroll">
        <Projects />
      </div>
      <div className="contact__scroll">
        <Contact />
      </div>
    </div>
  )
}

export default ScrollAnimation
