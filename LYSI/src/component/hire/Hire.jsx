
import "./hire.css";
import { galleryImg, stayInform } from "./Data";
import { GoArrowRight } from "react-icons/go";
import Lazyloading from "../../template/Lazyloading";

const Hire = () => {
  return (
    <div className="container hire" id="hire">
      <div className="center">
        <h1>Hire Top Talent with LYSI</h1>
        <p>
          At LYSI, we connect forward-thinking employers with skilled
          architects ready to make an impact. Our graduates are not just
          equipped with theoretical knowledge but are trained in practical,
          industry-relevant skills, making them valuable assets to any
          architectural firm or organization.
        </p>
        <div className="gallery">
          {galleryImg.map(({ imgPath }, index) => (
            <span key={index}>
              <Lazyloading src={imgPath} alt="gallery" />
            </span>
          ))}
          <p>
          Governments and organizations with the desire to create opportunities
          and build a future where architecture thrives on creativity,
          inclusivity, and excellence can do that with LYSI.
        </p>
        </div>
        
        {stayInform.map(({ h1, p, buttonTxt}, index) => {
          return (
            <div className="stay-inform" key={index}>
              <h1>{h1}</h1>
              <p>{p}</p>
              <button>
                {buttonTxt} <GoArrowRight size="20" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hire;
