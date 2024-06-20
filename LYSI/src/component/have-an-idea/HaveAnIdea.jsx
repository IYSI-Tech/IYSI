
import { useEffect } from "react";
import "./haveAnIdea.css";
import Aos from "aos";

const HaveAnIdea = () => {
  
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="container have-an-idea">
      <div className="center">
        <h1 data-aos="zoom-in" data-aos-once="true">Have an idea? Let&#39;s get your project started today!</h1>
        <button data-aos="zoom-in" data-aos-once="true">Get in touch</button>
      </div>
    </div>
  );
};

export default HaveAnIdea;
