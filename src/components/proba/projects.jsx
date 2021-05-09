import React, { useEffect } from "react"
import "./projects.css"

import { gsap } from "gsap"
import { RoughEase } from "gsap/EasePack"
import { TextPlugin } from "gsap/TextPlugin"

function Projects() {
  gsap.registerPlugin(TextPlugin, RoughEase)
  const words = [" Developer", " Designer", " Freelancer"]
  let boxTimeLine = gsap.timeline()
  let masterTl = gsap.timeline({ repeat: -1 }).pause()

  useEffect(() => {
    gsap.to(".gsap__cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    })
    boxTimeLine
      .to(".gsap__box", {
        duration: 1,
        width: "33vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .to(".gsap__box", {
        duration: 2,
        autoAlpha: 0.5,
        yoyo: true,
        repeat: -1,
        ease:
          "rough({ template:  none.out , strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
      })
      .from(".gsap__greedings", {
        duration: 1,
        y: "7vw",
        ease: "power3.out",
        onComplete: () => masterTl.play(),
      })
      .to(".gsap__box", { duration: 1, height: "7vw", ease: "bounce.out" })

    words.forEach(word => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      tl.to(".gsap__text", { duration: 1, text: word })
      masterTl.add(tl)
    })
  }, [])

  return (
    <div className="gsap__container">
      <h1 className="gsap__title">
        <span className="gsap__box"></span>
        <span className="gsap__greedings">Hi, I'm Milan </span>

        <span className="gsap__text"></span>
        <span className="gsap__cursor"> _</span>
      </h1>
    </div>
  )
}

export default Projects
