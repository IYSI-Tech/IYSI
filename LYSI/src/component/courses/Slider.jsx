import React from "react";
import { courses } from "./Data";
import a from "../../asset/images/sand-timer.webp";
import LazyLoading from "../../template/Lazyloading";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 879 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 879, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
        <Carousel
          responsive={responsive}
          dotListClass="dott"
          containerClass="carousel"
          renderDotsOutside={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          rewind={true}
          rewindWithAnimation={true}
        >
          {courses.map(({ h3, p }, index) => {
            return (
              <div key={index} className="card">
                <LazyLoading src={a} />
                <h1>{h3}</h1>
                <p>{p}</p>
              </div>
            );
          })}
        </Carousel>
  );
}

export default Slider;
