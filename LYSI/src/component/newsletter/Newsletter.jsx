import { useEffect, useState } from "react";
import axios from "axios";
import "./newsletter.css";
import a from "../../asset/images/email.webp";
import Lazyloading from "../../template/Lazyloading";
import Aos from "aos";

const Newsletter = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/newsletter",
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
      if (error.response.data.errors) {
        const serverErrors = error.response.data.errors;
        setErrors({
          email: serverErrors.email ? serverErrors.email.join("") : "",
        });
      } else {
        setErrors({
          email: "",
        });
      }
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="container newsletter">
      <div className="center">
        <div data-aos="fade-right" data-aos-once="true">
          <Lazyloading src={a} alt="email" />
          <div className="email-txt">
            <h1>Subscribe tou our newsletter</h1>
            <p>
              Stay updated with the latest news, events, and training programs
              from LYSI by subscribing to our newsletter.
            </p>
          </div>
        </div>
        <div>
          <form
            className={errors.email ? "margin-danger" : "undefined"}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              required
              autoComplete="true"
              onChange={handleChange}
              placeholder="enter your email address"
            />
            <button type="submit"> Subscribe</button>
          </form>
          {errors.email && <span className="er">{errors.email}</span>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
