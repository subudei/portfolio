import React from "react"
import "./projects.style.css"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

import { StaticImage } from "gatsby-plugin-image"

function Projects() {
  return (
    <div className="projects__page__container">
      <div className="project__intro">
        <h2 className="projects__title">Some Things I’ve Built</h2>
      </div>
      <div className="projects__container">
        <div className="project__container">
          <div className="img__container">
            <StaticImage
              src="../images/wapp.png"
              width={1200}
              alt="Weather App"
            />
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, veritatis.
            </p>
            <FaGithub />
          </div>
        </div>
        <div className="project__container">
          <div className="img__container">
            <StaticImage
              src="../images/todo__app.png"
              width={1200}
              alt="Todo App"
            />
          </div>
          <div className="img__wraper"></div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, veritatis.
            </p>
            <FaGithub />
          </div>
        </div>
        <div className="project__container">
          <div className="img__container">
            <StaticImage
              src="../images/ecommerce.png"
              width={1200}
              alt="Todo App"
            />
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, veritatis.
            </p>
            <FaGithub />
          </div>
        </div>
        <div className="project__container">
          <div className="img__container">
            <StaticImage
              src="../images/massage_page.png"
              width={1200}
              alt="Todo App"
            />
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, veritatis.
            </p>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
