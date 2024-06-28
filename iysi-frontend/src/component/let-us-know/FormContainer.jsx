import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    company:"",
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
    <form id="let-us-know" onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Brian Clark" required onChange={handleChange}/>
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            required onChange={handleChange}
          />
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="(123) 456 - 7890"
            required onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="company">Company:</label>
          <input type="email" id="company" name="company" placeholder="Arch Agency" required onChange={handleChange}/>
        </li>
      </ul>
      <label htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Type your message here..."
          required onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">
        Get in Touch <GoArrowRight size="20" />
      </button>
    </form>
  );
};

export default FormContainer;
