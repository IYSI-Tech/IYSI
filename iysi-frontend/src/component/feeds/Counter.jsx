import { useRef, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = (items, index) => {
  const [isVisible, setIsvisible] = useState(false);
  const elementRef = useRef(null);

  const onEnterViewport = () => {
    setIsvisible(true);
  };
  return (
    <ScrollTrigger onEnter={onEnterViewport} index={index}>
      {!isNaN(items.h1) ? (
        <h1 ref={elementRef}>
          {isVisible && (
            <CountUp className={items.className} start={0} end={items.h1} />
          )}
          {items.sign}
        </h1>
      ) : (
        <h1 className={items.className}>
          {items.h1}
          {items.sign}
        </h1>
      )}
    </ScrollTrigger>
  );
};

export default Counter;
