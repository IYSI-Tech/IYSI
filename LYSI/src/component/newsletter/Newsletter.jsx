import { useState } from "react";
import axios from "axios";
import "./newsletter.css";
import a from "../../asset/images/email.webp";
import Lazyloading from "../../template/Lazyloading";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {

    try {
      const response = await axios.post(
        "http://localhost:8000/api/newsletter",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
      alert("Okay");
      // console.log("Form Data", formData);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="container newsletter">
      <div className="center">
        <div>
          <Lazyloading src={a} alt="email" />
          <div className="email-txt">
            <h1>Subscribe tou our newsletter</h1>
            <p>
              Stay updated with the latest news, events, and training programs
              from NextEd by subscribing to our newsletter.
            </p>
          </div>
        </div>
        <div>
          <div className="subscribe-input">
            <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="enter your email address"
            />
            <button onClick={handleSubmit}> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
