import "./community.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import axios from "axios";
import { GoArrowRight } from "react-icons/go";

const Community = () => {
  const [optionData, setOptionData] = useState("");
  const [checkboxData, setCheckboxData] = useState([]);
  const [userName, setUserName] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    occupation: "",
    institution: "",
    join_reason: "",
    area_interest: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    occupation: "",
    institution: "",
    join_reason: "",
    area_interest: "",
  });

  const handleChangeUserName = (e) => {
    const { name, value } = e.target;
    setUserName({
      ...userName,
      [name]: value,
    });
    let userValue =
      userName.fname + " " + userName.mname + " " + userName.lname;
    setFormData({
      ...formData,
      name: userValue,
    });
  };
  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      mobile: e,
    });

    setErrors({ ...errors, mobile: "" });
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const selectedIndex = e.target.selectedIndex;
    if (name == "checkbox") {
      if (checked) {
        setCheckboxData((prev) => [...prev, value]);

        setFormData({
          ...formData,
          [name]: checkboxData,
        });
        // console.log(formData)
      } else {
        setCheckboxData(
          checkboxData.filter((prevValues) => prevValues !== value)
        );

        setFormData({
          ...formData,
          [name]: checkboxData,
        });
      }
      // console.log(checkboxData);
    }
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
      const response = await axios.post("/api/community", formData, {
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
          mobile: serverErrors.mobile ? serverErrors.mobile.join("") : "",
          occupation: serverErrors.occupation
            ? serverErrors.occupation.join("")
            : "",
          institution: serverErrors.institution
            ? serverErrors.institution.join("")
            : "",
          join_reason: serverErrors.join_reason
            ? serverErrors.join_reason.join("")
            : "",
          area_interest: serverErrors.area_interest
            ? serverErrors.area_interest.join("")
            : "",
        });
      } else {
        setErrors({
          name: "",
          email: "",
          gender: "",
          mobile: "",
          occupation: "",
          institution: "",
          join_reason: "",
          area_interest: error.response.statusText,
        });
      }
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div className="container community">
      <div className="center">
        <div className="route-one-img"></div>
        <div className="get-in-touch">
          <h1>Join Community</h1>

          <form
            id="get-in-touch"
            name="form1"
            onSubmit={handleSubmit}
          >
            <label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className={errors.name ? "margin-danger" : "undefined"}
                onChange={handleChangeUserName}
                required
                autoComplete="true"
              />
              {errors.name && <span className="er">{errors.name}</span>}
            </label>

            <label>
              <input
                type="text"
                name="mname"
                placeholder="Middle Name"
                className={errors.name ? "margin-danger" : "undefined"}
                onChange={handleChangeUserName}
                required
                autoComplete="true"
              />
              {errors.name && <span className="er">{errors.name}</span>}
            </label>

            <label>
              <input
                type="text"
                placeholder="Last Name"
                className={errors.name ? "margin-danger" : "undefined"}
                name="lname"
                onChange={handleChangeUserName}
                required
                autoComplete="true"
              />
              {errors.name && <span className="er">{errors.name}</span>}
            </label>

            <label>
              <input
                type="email"
                placeholder="Email Address"
                className={errors.email ? "margin-danger" : "undefined"}
                name="email"
                onChange={handleChange}
                required
                autoComplete="true"
              />
              {errors.email && <span className="er">{errors.email}</span>}
            </label>

            <label>
              <PhoneInput
                country={"ng"}
                type="tel"
                placeholder="Your phone number"
                containerClass={errors.mobile ? "margin-danger" : "undefined"}
                name="mobile"
                onChange={handleChangeInput}
                inputProps={{ required: true }}
                autoComplete="true"
              />
              {errors.mobile && <span className="er">{errors.mobile}</span>}
            </label>

            <label aria-label="choose-an-option">
              <select
                name="occupation"
                className={errors.occupation ? "margin-danger" : "undefined"}
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Current Occupation
                </option>
                <option>Student</option>
                <option>Lecturer</option>
                <option>Architecture Enthusiast</option>
                <option>Practicing Architect</option>
                <option>Interior designer</option>
                <option>Urban Planner</option>
                <option id="specify">
                  {optionData ? optionData : "Other [Please specify]"}
                </option>
              </select>
              {errors.occupation && (
                <span className="er">{errors.occupation}</span>
              )}
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

            <label>
              <input
                type="text"
                placeholder="Organization/Institution"
                className={errors.institution ? "margin-danger" : "undefined"}
                name="institution"
                onChange={handleChange}
                required
                autoComplete="true"
              />
              {errors.institution && (
                <span className="er">{errors.institution}</span>
              )}
            </label>

            <label>
              <textarea
                cols="30"
                placeholder="Why Do You Want to Join the Community"
                className={errors.join_reason ? "margin-danger" : "undefined"}
                name="join_reason"
                onChange={handleChange}
                required
                autoComplete="true"
              ></textarea>
              {errors.join_reason && (
                <span className="er">{errors.join_reason}</span>
              )}
            </label>

            <div>
              <p>Areas of Interest:</p>
              <div
                className={`checkbox ${
                  errors.area_interest ? "margin-danger" : "undefined"
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    name="area_interest"
                    value="Architectural Software Training"
                    onChange={handleChange}
                  />
                  Architectural Software Training
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="area_interest"
                    value="Mentorship Program"
                    onChange={handleChange}
                  />
                  Mentorship Program
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="area_interest"
                    value="Events and Workshops"
                    onChange={handleChange}
                  />
                  Events and Workshops
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="area_interest"
                    value="Advocacy and inclusion initiatives"
                    onChange={handleChange}
                  />
                  Advocacy and inclusion initiatives
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="area_interest"
                    value="Industry New and Updates"
                    onChange={handleChange}
                  />
                  Industry New and Updates
                </label>
              </div>
              {errors.area_interest && (
                <span className="er">{errors.area_interest}</span>
              )}
            </div>
            <div>
              <button type="submit" className="btn bg-variant">
                Join <GoArrowRight size="20" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Community;
