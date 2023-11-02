import React from "react";
import "./skills.scss";
import { Fade, Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faBootstrap,
  faSquareJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
const Skills = () => {
  return (
    <div className="skills">
      <Slide className="slide">
        <div className="wrapper">
          <div className="text-container">
            <Fade delay={1e3} cascade damping={1e-1} className="fade">
              I can work with
            </Fade>
            <img src="/laptop.png" />
          </div>
          <div className="skills-icons">
            <Fade delay={1e3} cascade damping={1e-1} className="fade-icon">
              <FontAwesomeIcon
                icon={faHtml5}
                size="3x"
                className="icons"
                style={{ color: "#e34c26", width: "60px", height: "80px" }}
              />
              
              <FontAwesomeIcon
                icon={faSquareJs}
                size="3x"
                className="icons"
                style={{ color: "#ffff80", width: "60px", height: "80px" }}
              />
              <FontAwesomeIcon
                icon={faJava}
                size="3x"
                className="icons"
                style={{ color: "#61DAFB", width: "60px", height: "80px" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                size="3x"
                className="icons"
                style={{ color: "#61DAFB", width: "60px", height: "80px" }}
              />
              <FontAwesomeIcon
                icon={faNodeJs}
                size="3x"
                className="icons"
                style={{ color: "#68a063 ", width: "60px", height: "80px" }}
              />
            </Fade>
          </div>
        </div>
        
      </Slide>
      <Slide className="cards">
      <Fade delay={1e3} cascade damping={1e-1} className="card-container">
      <div className="card">
        <div className="card-content">
          <h2>Front End</h2>
          <p>HTML, CSS, JavaScript, ReactJs, Redux, TypeScript</p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Backend</h2>
          <p>ExpressJS, NodeJS, MongoDB, MySql</p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Tools</h2>
          <p>Git & Github, PostMan, MongoDB Atlas.</p>
        </div>
      </div>
    </Fade>
      </Slide>

    </div>
  );
};

export default Skills;
