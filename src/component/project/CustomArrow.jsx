import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button aria-label="left-arrow" className="custom-left-arrow" name="left-arrow" onClick={onClick}>
      <FiArrowLeft size={25} />
    </button>
  );
};
export const CustomRightArrow = ({ onClick }) => {
  return (
    <button aria-label="right-arrow" className="custom-right-arrow" name="right-arrow" onClick={onClick}>
      <FiArrowRight size={25} />
    </button>
  );
};
