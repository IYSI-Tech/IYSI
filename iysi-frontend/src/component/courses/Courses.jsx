import { Link } from "react-router-dom";
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
        <Link className="btn" to="register">
          Register Now <GoArrowRight size="20" />
        </Link>
      </div>
    </div>
  );
};

export default Courses;
