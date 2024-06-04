import React from "react";
import "./letUsKnow.css";
import a from "../../asset/images/letUsKnow.webp";
import LazyLoading from "../../template/Lazyloading";
import FormContainer from "./FormContainer";

const LetUsKnow = () => {
  return (
    <div className="container let-us-know">
      <div className="center">
        <LazyLoading src={a} alt="let us know" />
        <div className="form">
          <h1>Let us know what you think!</h1>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default LetUsKnow;
