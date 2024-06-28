
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import './contact.css'

const Contact = () => {
  const [optionData, setOptionData] = useState("");
  const [checkboxData, setCheckboxData] = useState([]);
  const [userName, setUserName] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    position: "",
    proposal: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    position: "",
    proposal: "",
    website: "",
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
      const response = await axios.post(import.meta.env.VITE_IYSI_API_END_POINT_URL+"/api/contact", formData, {
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
          mobile: serverErrors.mobile ? serverErrors.mobile.join("") : "",
          organization: serverErrors.organization
            ? serverErrors.organization.join("")
            : "",
            position: serverErrors.position
            ? serverErrors.position.join("")
            : "",
            proposal: serverErrors.proposal
            ? serverErrors.proposal.join("")
            : "",
            website: serverErrors.website
            ? serverErrors.website.join("")
            : "",
        });
      } else {
        setErrors({
          name: "",
          email: "",
          mobile: "",
          organization: "",
          position: "",
          proposal: "",
          website: "",
        });
      }
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div className="container contact">
      <div className="center">
        <div className="get-in-touch">
          <h1>Contact Us</h1>

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
            <label>
              <input
                type="text"
                placeholder="organization"
                className={errors.organization ? "margin-danger" : "undefined"}
                name="organization"
                onChange={handleChange}
                required
                autoComplete="true"
              />
              {errors.organization && (
                <span className="er">{errors.organization}</span>
              )}
            </label>


            <label aria-label="choose-an-option">
              <select
                name="position"
                className={errors.position ? "margin-danger" : "undefined"}
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Position/Title
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
              {errors.position && (
                <span className="er">{errors.position}</span>
              )}
            </label>
            <label>
              <input
                type="text"
                placeholder="Partnership Proposal"
                className={errors.proposal ? "margin-danger" : "undefined"}
                name="proposal"
                onChange={handleChange}
                required
                autoComplete="true"
              ></input>
              {errors.proposal && (
                <span className="er">{errors.proposal}</span>
              )}
            </label>
            <label>
              <input
                type="text"
                placeholder="Website"
                className={errors.website ? "margin-danger" : "undefined"}
                name="website"
                onChange={handleChange}
                required
                autoComplete="true"
              ></input>
              {errors.website && (
                <span className="er">{errors.website}</span>
              )}
            </label>
            <div>
              <button type="submit" className="btn bg-variant">
                Submit <GoArrowRight size="20" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
