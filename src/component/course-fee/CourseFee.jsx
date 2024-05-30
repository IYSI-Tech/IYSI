import React from "react";
import "./course-fee.css";
import { courseFee } from "./Data";
import { MdLiveTv, MdLaptopMac } from "react-icons/md";
import {
  AiOutlineFieldTime,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

const icons = {
  MdLiveTv,
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
  MdLaptopMac,
};

const CourseFee = () => {
  return (
    <div className="course-fee container" id="course-fee">
      <div className="center">
        <section className="highlight">
          <h1>Next ED Highlights</h1>
          <ul>
            {courseFee.map(({ a, p }, index) => {
              const Iconss = icons[a];

              return (
                <li key={index}>
                  <Iconss className="highlight-icon" size="26" />
                  <p>{p}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="fee">
          <div className="course-fee-txt1">
          <h1>Course Fees</h1>
          <p>
            We are driven we are driven by the idea of program affordability, so
            we give you several financial options to manage and budget the
            expenses of your course.
          </p>
          </div>
          <div className="course-fee-txt2">
          <h1>Enroll for Free</h1>
          <div>
            <p>Connect and learn real architectural software application</p>
            <button onClick={() => alert('Backend services is required')}>Join webinar</button>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseFee;
