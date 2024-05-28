import React, { useState } from "react";

import LazyLoading from "../../template/Lazyloading";
import a from "../../asset/images/swot.webp";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Okay");
    // console.log("Form Data", formData);
  };
  return (
    <div className="swot-form">
      <form id="swot-form" onSubmit={handleSubmit}>
        <LazyLoading className="swot-img" src={a} />
        <input
          type="text"
          placeholder="Your name"
          className="name"
          name="name"
          onChange={handleChange}
          required
          autoComplete="true"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="email"
          name="email"
          onChange={handleChange}
          required
          autoComplete="true"
        />
        <input
          type="tel"
          placeholder="Your phone number"
          className="name"
          name="tel"
          onChange={handleChange}
          required
          autoComplete="true"
        />
        <div className="select-container">
          <label aria-label="course">
          <select name="course" id="course" onChange={handleChange} required>
            <option defaultValue hidden>
              Select courses
            </option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Automobile Engineering</option>
            <option>computer Training</option>
          </select>
          </label>
        </div>
        <p>
          By submitting the form, you agree to our
          <a href="http://www.google.com">
            Terms and <br />
            Conditions
          </a>
          and our <a href="http://www.google.com">Privacy Policy</a>
        </p>
        <button type="submit">Request Webinar Invitation</button>
      </form>
    </div>
  );
};

export default Form;
