import React, { useEffect } from "react"
import "./introAnimation.styles.css"

import { gsap } from "gsap"

function IntroAnimation() {
  const tl = gsap.timeline({
    delay: 2,
    repeat: -1,
  })
  // const tl = gsap.timeline({ delay: 1 })

  useEffect(() => {
    tl.to(".i__drop", { opacity: 1, duration: 0.1 }, "-=0.1")
    tl.to(".i__drop", {
      duartion: 0.2,
      y: "40vh",
      ease: "bounce.out",
    })
    tl.to(".i__letter", { bottom: "0.6vh", ease: "elastic.out(1,0.3)" })
    tl.to(".i__drop", { y: "34vh", ease: "elastic.out" }, "-=0.4")

    tl.to(
      ".h__drop",
      {
        dration: 1,
        top: "31.7vh",

        ease: "elastic.out(1, 0.6)",
      },
      "-=0.3"
    )

    tl.to(".h__drop", { height: "7.7vh", ease: "elastic.out(1.5,1z)" }, "-=0.6")
    tl.to(".h__drop", { duration: 0.05, width: "7vh" }, "-=1")
    tl.to(".h__letter", { opacity: 1 })
    tl.to(".h__drop", { duration: 0.05, width: 0 }, "-=0.2")
    tl.to(".i__drop", { backgroundColor: "#a4db32" }, "+=0.3")
    tl.to(".web__coma", { duration: 0.2, opacity: 1 }, "-=1")
    tl.to(".web__coma", { opacity: 0, duration: 1 })
    tl.to(".h__drop", {
      duration: 0.05,
      left: "11.1vh",
      width: "2vh",
    })
    tl.to(".h__drop", { opacity: 1, left: "-15vh", duration: "1" })
    tl.to(".h__drop", { width: "7vh" }, "-=1")
    tl.to(".h__letter", { opacity: 0 }, "-=0.9")
    tl.to(".i__letter", { bottom: "-10vh", duration: 0.05 }, "-=0.8")
    tl.to(".i__drop", { y: "40vh", duration: 0.3, ease: "bounce.out" }, "-=0.8")
    tl.to(".i__dev", { bottom: 0, ease: "elastic.out" }, "-=0.3")
    tl.to(".paravan__box", { height: "8.5vh", width: "7.65vh" }, "-=0.7")
    tl.to(".m__dev", { left: "9.5vh", ease: "power3.out" })
    tl.to(".i__drop", { x: "18.1vh", duration: 0.2 }, "-=1.3")
    tl.to(
      ".a__dev",
      { opacity: 1, duration: 0.3, rotate: 360, ease: "elastic.out(2,0.2)" },
      "-=0.5"
    )
    tl.to(
      ".i__drop",
      { y: "48.5vh", duration: 0.1, ease: "bounce.out(1,1)" },
      "-=1"
    )
    tl.to(".web__dev", { left: "31vh" }, "-=0.9")
    tl.to(".web__dev", { fontStyle: "normal" })
    tl.to(".paravan__box", { height: 0, width: 0 })
    tl.to(".i__drop", { scale: 2.5 }, "-=1.5")
    tl.to(".developer__o", { opacity: 1 }, "-=1.2")
    tl.to(".i__drop", { duration: 0.01, opacity: 0 })
    tl.to(".developer__o", { color: "#db2779" })
    tl.to(".developer__dev", { left: "7vh" }, "-=3")
    tl.to(
      ".developer__e",
      { duration: 0.2, opacity: 1, top: 0, rotate: 720 },
      "-=2"
    )
    tl.to(".developer__ee", { opacity: 1 }, "-=1.4")
    tl.to(".developer__ee", { left: "42.5vh", ease: "bounce.out" }, "-=1.4")
    tl.to(".developer__l__drop", { duration: 0.4, top: "52vh" }, "-=2.5")
    tl.to(".developer__l__drop", { height: "7.5vh" }, "-=2.4")
    tl.to(".developer__l__drop", { opacity: 0 }, "-=2.3")
    tl.to(".developer__l", { opacity: 1 }, "-=2.3")
    tl.to(".developer__r", { duration: 0.1, top: 0 }, "-=2")
    tl.to(".developer__p", { opacity: 1 }, "-=2.3")
    tl.to(".developer__dot", { opacity: 1, duration: 2 }, "-=0.5")
  }, [])
  return (
    <div className="animation__container">
      <div className="hello__div">
        <div className="h__letter">H</div>
        <div className="h__drop"></div>
        <div className="i__drop"></div>
        <div className="i__letter"></div>
        <div className="i__dev">I</div>
        <div className="m__dev">'m</div>
        <div className="paravan__box"></div>
        <div className="a__dev">a</div>
        <div className="web__dev">web</div>
        <div className="web__box" />
        <div className="web__coma">,</div>
      </div>
      <div className="message__div">
        <div className="message__drop"></div>

        <div className="developer__dev">dev</div>
        <div className="developer__e">e</div>
        <div className="developer__l">l</div>
        <div className="developer__o">o</div>
        <div className="developer__p">p</div>
        <div className="developer__ee">e</div>
        <div className="developer__r">r</div>
        <div className="developer__dot">.</div>
        <div className="r__shield" />
      </div>
      <div className="developer__l__drop" />
    </div>
  )
}

export default IntroAnimation
