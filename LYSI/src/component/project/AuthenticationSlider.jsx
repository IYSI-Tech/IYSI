import React from "react";
import LazyLoading from "../../template/Lazyloading";
import Carousel from "react-multi-carousel";
import { sliderDataAuthentic, image, responsive } from "./Data";
import "react-multi-carousel/lib/styles.css";
import a from "../../asset/images/cisco.webp";
import b from "../../asset/images/react.webp";
import c from "../../asset/images/database.webp";
import d from "../../asset/images/database2.webp";
import e from "../../asset/images/js.webp";

const AuthenticationSlider = () => {
  const images = { b, c, d, e };

  const authenticImg = () => {
    return image.map(({ src }, index) => {
      const Src = images[src];
      return <LazyLoading key={index} className="authentics-img" src={Src} />;
    });
  };

  const slider = () => {
    return sliderDataAuthentic.map(({ p, h1 }, index) => {
      return (
        <div key={index} className="authentication">
          <h1>{h1}</h1>
          <LazyLoading className="cisco" src={a} />
          <p>
            {p}
          </p>
          <div className="tools">
            <p>Tools:</p>
            {authenticImg()}
          </div>
        </div>
      );
    });
  };

  return (
      <Carousel
        responsive={responsive}
        swipeable={true}
        transitionDuration={1000}
        draggable={true}
        autoPlaySpeed={3000}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        infinite={true}
        autoPlay={true}
        itemClass="carousel-item"
        arrows={false}
      >
        {slider()}
      </Carousel>
  );
};

export default AuthenticationSlider;
