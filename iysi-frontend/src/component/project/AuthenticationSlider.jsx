
import Carousel from "react-multi-carousel";
import { responsive } from "./Data";

const AuthenticationSlider = () => {
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
       <div className="authentication">

       </div>
      </Carousel>
  );
};

export default AuthenticationSlider;
