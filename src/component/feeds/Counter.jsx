import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Counter = ({ className, h1, sign }) => {
    const [isVisible, setIsvisible] = useState(false);
    const elementRef = useRef(null);
    
    const onEnterViewport = ()=> {
      setIsvisible(true);
    };
  return (
    <ScrollTrigger
      onEnter={onEnterViewport}
    >
      {!isNaN(h1) ? (
        <h1 ref={elementRef}>
          {isVisible && <CountUp className={className} start={0} end={h1} />}
          {sign}
        </h1>
      ) : (
        <h1 className={className}>
          {h1}
          {sign}
        </h1>
      )}
    </ScrollTrigger>
  );
};

export default Counter;
