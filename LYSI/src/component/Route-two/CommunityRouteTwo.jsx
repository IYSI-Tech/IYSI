import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./communityRouteTwo.css";
const CommunityRouteTwo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    tel: "",
    occupation: "",
  });
  // console.log(formData)


  const  handleKeyDown = (e) => {
    if(e.key == "Enter"){
// let value = "";
      const check = () => {
Object.values(formData).map((item) => {
  if(item === null){
    console.log("okay")
      }
})
      }
      check();
      e.preventDefault();
      handleSubmit();
    }
  }

  const handleChange = (e) => {
    if (e.target === undefined) {
      setFormData({
        ...formData,
        tel: e,
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log("Form Data", formData);
  };
  return (
    <div className="container community-route-two">
      <div className="center">
      <div className="get-in-touch">
          <h1>Join Community</h1>
          
          <form id="get-in-touch" name="form1" onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your First Name"
              className="name"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Your Last Name"
              name="lastName"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Your Middle Name"
              name="middleName"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              onChange={handleChange}
              required
              autoComplete="true"
            />
            <label htmlFor="tel"><p>Phone Number</p>
            <PhoneInput
              country={"ng"}
              type="tel"
              placeholder="Your phone number"
              name="tel"
              onChange={handleChange}
              inputProps={{ required: true }}
              autoComplete="true"
            />
            </label>
            
            <label htmlFor="tel"><p>Current Occupation</p>
            <div className="select-container">
              <select name="occupation" required onChange={handleChange}>
                <option defaultValue hidden>
                  Position/Title
                </option>
                <option>Student</option>
                <option> Lecturer</option>
                <option> Architecture Enthusiast</option>
                <option> Practicing Architect</option>
                <option>Interior Designer</option>
                <option> Urban Planner</option>
                <option> Other</option>
              </select>
            </div>
            </label>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityRouteTwo;
