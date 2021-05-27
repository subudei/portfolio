import React from "react"
import "./projects.style.css"

import { StaticImage } from "gatsby-plugin-image"

function Projects() {
  return (
    <div className="projects__page__container">
      {/* <h1>Projects page</h1> */}
      <h2 className="projects__title">Some Things I’ve Built</h2>
      <div className="project__container">
        <div className="img__container">
          <StaticImage
            src="../images/todo__app.png"
            width={1200}
            alt="Todo App"
          />
        </div>
        <div className="project__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            veritatis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
