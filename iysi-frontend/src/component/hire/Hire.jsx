
import "./hire.css";
import { galleryImg, stayInform } from "./Data";
import { GoArrowRight } from "react-icons/go";
import Lazyloading from "../../template/Lazyloading";
import {Link} from 'react-router-dom'
const Hire = () => {
  return (
    <div className="container hire" id="about-us">
      <div className="center">
        <h1>Hire Top Talent with IYSI</h1>
        <p>
          At IYSI, we connect forward-thinking employers with skilled
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
          inclusivity, and excellence can do that with IYSI.
        </p>
        </div>
        
        {stayInform.map((items, index) => {
          return (
            <div className="stay-inform" key={index}>
              <h1>{items.h1}</h1>
              <p>{items.p}</p>
              <Link to={items.linkPath} className="btn">
                {items.buttonTxt} <GoArrowRight size="20" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hire;
