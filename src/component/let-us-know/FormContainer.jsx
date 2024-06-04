import React from "react";
import { GoArrowRight } from "react-icons/go";

const FormContainer = () => {
  return (
    <form id="let-us-know">
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Brian Clark" />
        </li>
        <li>
          <label htmlFor="email">Name:</label>
          <input type="email" id="email" placeholder="example@email.com" />
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="Phone" placeholder="(123) 456 - 7890" />
        </li>
        <li>
          <label htmlFor="company">Name:</label>
          <input type="email" id="company" placeholder="Arch Agency" />
        </li>
      </ul>
          <label htmlFor="message">
          <textarea
            id="message"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
          </label>
      <button type="submit">
        Get in Touch <GoArrowRight size="20" />
      </button>
    </form>
  );
};

export default FormContainer;
