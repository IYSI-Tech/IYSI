import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderData } from "./Data";
import CountTrigger from "./CountTrigger";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrow";

const ProjectSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const SliderData = () => {
    return sliderData.map(({ p,count, colorClass }, index) => {
      return (
        <div key={index} className={`project-counter ${colorClass}`}>
          <span></span>
          <span></span>
          <div className="counter">
            <CountTrigger h1={count}/>
            <p>{p}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel
      responsive={responsive}
      renderArrowsWhenDisabled={true}
      containerClass="carousel"
      
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {SliderData()}
    </Carousel>
  );
};

export default ProjectSlider;
