import React from "react";
import ProjectSlider from "./ProjectSlider";
import AuthenticationSlider from "./AuthenticationSlider";
import "./project.css";

const Project = () => {
  return (
    <div className="project container" id="projects">
      <div className="center">
        <div className="hand-on-project">
          <h1>Hands-on Projects</h1>
          <p>
            Find out how our Mentor transformed their careers by giving <br />{" "}
            Hands on Projects.
          </p>
          <div className="slide">
            <ProjectSlider />
          </div>
        </div>
        <div className="authentication-container">
          <AuthenticationSlider />
        </div>
      </div>
    </div>
  );
};

export default Project;
