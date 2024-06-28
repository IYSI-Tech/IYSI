import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [optionData, setOptionData] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    occupation: "",
    institution: "",
    area_interest: "",
    frequency:""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    occupation: "",
    institution: "",
    area_interest: "",
    frequency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const selectedIndex = e.target.selectedIndex;

    if (e.target.tagName == "SELECT") {
      if (e.target.options[selectedIndex].id == "specify") {
        const lastOptionID = e.target.options[selectedIndex].id;
        const optionValue =
          lastOptionID == "specify" && prompt("Current Occupation");
        console.log(optionValue);
        setOptionData(optionValue);
        setFormData({
          ...formData,
          [name]: optionValue,
        });
        console.log(formData);
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data", formData);
    try {
      const response = await axios.post("/api/newsletter", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data submitted successfully:", response.data);
      alert("Your request is submitted");
      // console.log("Form Data", formData);
      e.target.reset();
    } catch (error) {
      if (error.response.data.errors) {
        const serverErrors = error.response.data.errors;
        setErrors({
          name: serverErrors.name ? serverErrors.name.join("") : "",
          email: serverErrors.email ? serverErrors.email.join("") : "",
          gender: serverErrors.gender ? serverErrors.gender.join("") : "",
          occupation: serverErrors.occupation
            ? serverErrors.occupation.join("")
            : "",
          institution: serverErrors.institution
            ? serverErrors.institution.join("")
            : "",
          area_interest: serverErrors.area_interest
            ? serverErrors.area_interest.join("")
            : "",
            frequency: serverErrors.frequency
            ? serverErrors.frequency.join("")
            : "",
        });
      } else {
        setErrors({
          name: "",
          email: "",
          gender: "",
          occupation: "",
          institution: "",
          area_interest: "",
          frequency: error.response.statusText
        });
      }
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div className="container newsletter">
      <div className="center">
        <div className="background"></div>
        <div className="overlay"></div>

        <form className="get-in-touch" name="form1" onSubmit={handleSubmit}>
          <h1>Newsletter</h1>
          <label>
            <input
              type="text"
              placeholder="First name &nbsp; Middle name  &nbsp; Last name"
              className={errors.name ? "margin-danger" : "undefined"}
              name="name"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            {errors.name && <span className="er">{errors.name}</span>}
          </label>

          <label>
            <input
              type="email"
              placeholder="Your email address"
              className={errors.email ? "margin-danger" : "undefined"}
              name="email"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            {errors.email && <span className="er">{errors.email}</span>}
          </label>
          <label aria-label="choose-an-option">
            <select
              name="gender"
              className={errors.gender ? "margin-danger" : "undefined"}
              required
              onChange={handleChange}
            >
              <option value="" hidden>
                Sex
              </option>
              <option>male</option>
              <option>female</option>
            </select>
            {errors.gender && <span className="er">{errors.gender}</span>}
          </label>
          <label aria-label="choose-an-option">
            <select
              name="occupation"
              className={errors.occupation ? "margin-danger" : "undefined"}
              required
              onChange={handleChange}
            >
              <option defaultValue hidden>
                Current Occupation
              </option>
              <option>Student</option>
              <option>Lecturer</option>
              <option>Architecture Enthusiast</option>
              <option>Practicing Architect</option>
              <option>Interior designer</option>
              <option>Urban Planner</option>
              <option id="specify">
                {optionData ? optionData : "Other [Please specify]"}{" "}
              </option>
            </select>
            {errors.occupation && (
              <span className="er">{errors.occupation}</span>
            )}
          </label>

          <label>
            <input
              type="text"
              placeholder="Organization/Institution"
              className={errors.occupation ? "margin-danger" : "undefined"}
              name="institution"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            {errors.institution && (
              <span className="er">{errors.institution}</span>
            )}
          </label>
          <label aria-label="choose-an-option">
            <select
              name="area_interest"
              className={errors.area_interest ? "margin-danger" : "undefined"}
              required
              onChange={handleChange}
            >
              <option value="" hidden>
                Areas of Interest
              </option>
              <option>Architectural Software Training</option>
              <option>Mentorshiop Progress</option>
              <option>Events and Workshops</option>
              <option>Advocacy and Inclusion Initiatives</option>
              <option>Industry News and Updates</option>
            </select>
            {errors.area_interest && (
              <span className="er">{errors.area_interest}</span>
            )}
          </label>

          <div
            className={`radio ${
              errors.frequency ? "margin-danger" : "undefined"
            }`}
          >
            <div>Preferred Frequency</div>
            <div>
              <label>
                <input
                  type="radio"
                  name="frequency"
                  onChange={handleChange}
                  value="Weekly"
                  required
                  autoComplete="true"
                />
                Weekly
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  onChange={handleChange}
                  value="Bi-weekly"
                  required
                  autoComplete="true"
                />
                Bi-weekly
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  onChange={handleChange}
                  value="Monthly"
                  required
                  autoComplete="true"
                />{" "}
                Monthly
              </label>
            </div>
            {errors.frequency && <span className="er">{errors.frequency}</span>}
          </div>

          <button type="submit" className="btn bg-variant">
            Register <GoArrowRight size="20" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
