
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const CustomLeftArrow = (e) => {
  return (
    <button aria-label="left-arrow" className="custom-left-arrow" name="left-arrow" onClick={e.onClick}>
      <FiArrowLeft size={25} />
    </button>
  );
};
export const CustomRightArrow = (e) => {
  return (
    <button aria-label="right-arrow" className="custom-right-arrow" name="right-arrow" onClick={e.onClick}>
      <FiArrowRight size={25} />
    </button>
  );
};
