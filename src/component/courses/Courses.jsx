import React from "react";
import "./courses.css";
import Slider from "./Slider";
import { GoArrowRight } from "react-icons/go";

const Courses = () => {
  return (
    <div className="course container" id="courses">
      <div className="center">
        <h1>RELATED COURSES</h1>
        <p>Why Join this Program?</p>
        <div className="course-gallery">
        <Slider />
        </div>
        <button onClick={() => alert("Backend services is required")}>
          Register Now <GoArrowRight size="20" />
        </button>
      </div>
    </div>
  );
};

export default Courses;
