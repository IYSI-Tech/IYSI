import React from "react";
import Lazyloading from "../../template/Lazyloading";
import { Data } from "./Data";
import { GoArrowRight } from "react-icons/go";
import "./mission.css";
import "./mission.css";

const Mission = () => {
  return (
    <div className="container mission">
      <div className="center">
        {Data.map(({ p, h1, img, alt, order1, order2 }, index) => {
          return (
            <div className="mission-data" key={index}>
                <Lazyloading className={`img ${order2}`} alt={alt} src={img} />
                <div className={order1}>
                  <h1>{h1}</h1>
                  <p>{p}</p>
                  <button type="submit" className="btn bg-variant">
                    Get in Touch <GoArrowRight size="20" />
                  </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
