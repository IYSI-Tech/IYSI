import React, { useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const CountTrigger = ({ h1 }) => {
  const elementRef = useRef(null);
  const [isTrigger, setIsTrigger] = useState(false);
  const onEnterViewport = ()=> {

    setIsTrigger(true);
  };
  return (
    <ScrollTrigger
      onEnter={onEnterViewport}
    >
      <div ref={elementRef}>
        {isTrigger && <CountUp start={0} end={h1} duration={3} delay={0} />}<span>+</span>
      </div>
    </ScrollTrigger>
  );
};

export default CountTrigger;
