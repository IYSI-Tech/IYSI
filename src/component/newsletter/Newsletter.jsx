import React from "react";
import "./newsletter.css";
import a from "../../asset/images/email.webp";
import Lazyloading from "../../template/Lazyloading";

const Newsletter = () => {
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
            <input type="email" id="email" placeholder="enter your email address"/>
            <button> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
