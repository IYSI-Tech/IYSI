import {useState} from "react";
import axios from 'axios';
import "./banner.css";
import { TbWorldSearch } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Banner = () => {
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
      const response = await axios.post('http://localhost:8000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data submitted successfully:', response.data);
      alert('Okay');
      // console.log("Form Data", formData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    
    };
  return (
    <div className="banner container" id="banner">
      <div className="center">
        <div className="banner-txt">
          <span>Specialization over generalization</span>
          <h1>
            Next-Ed Tech Focus <br />
            Artchitect Courses <span>& GIS</span>
          </h1>
          <p>
          &#34;Master cutting edge technology and architectural principles
            with live, interative sessions lied by industry renowned
            mentors.&#34;
          </p>
          <h2>Live Interactive Webinar Event</h2>
          <Link to="CommunityRouteOne" className="btn white"
          >
            <TbWorldSearch size="18" /> Join Community
          </Link>
        </div>
        <div className="get-in-touch">
          <h1>We&#39;re here to help!</h1>
          <p>
            Lets us know who are and course you&#39;d be 
            interested in!
          </p>
          <form id="get-in-touch" name="form1" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="name"
              name="name"
              onChange={handleChange}
              required
              autoComplete ='true'

            />
            <input
              type="email"
              placeholder="Your email address"
              className="email"
              name="email"
              onChange={handleChange}
              required
              autoComplete ='true'
            />
            <input
              type="tel"
              placeholder="Your phone number"
              className="name"
              name="tel"
              onChange={handleChange}
              required
              autoComplete ='true'
            />
            <div className="select-container">
              <label aria-label="choose-an-option">
              
              <select name="course" required onChange={handleChange}>
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
            <button type="submit" className="btn bg-variant">
              Get in Touch <GoArrowRight size="20" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;

