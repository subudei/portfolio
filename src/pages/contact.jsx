import React, { useEffect } from "react"
import "./contact.style.css"

import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin"
import { FiGithub } from "@react-icons/all-files/fi/FiGithub"

function Contact() {
  // gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({ repeat: -1 })
  useEffect(() => {
    tl.to(".contact__span", { color: "#ffffff", duration: 5 })
    tl.to(".contact__span", {
      color: "#db2779",
      // fontStyle: "italic",
      duration: 2,
      ease: "power4.out",
    })
  }, [])

  return (
    <div className="contact__container">
      <div className="contact__middle">
        <h2 className="contact__message">
          For any proposal of collaboration, fell free to{" "}
          <span className="contact__span">contact me.</span>
        </h2>
      </div>
      <div className="contact__icons">
        {/* <FaGithub />
          <FaLinkedinIn /> */}
        <FiLinkedin className="contact__icon__l" />
        <FiGithub className="contact__icon__g" />
      </div>

      <div className="contact__icons">
        <div className="contact__mobile">
          <h4>+38163363796</h4>
        </div>
        <div className="contact__mail">
          <a
            className="contact__mail__address"
            href="mailto:milan_cirkovic@yahoo.com"
            target="_blank"
          >
            milan_cirkovic@yahoo.com
          </a>
        </div>
      </div>

      <div className="contact__footer">
        <h5>Designed and Built by Milan Cirkovic</h5>
      </div>
    </div>
  )
}

export default Contact
