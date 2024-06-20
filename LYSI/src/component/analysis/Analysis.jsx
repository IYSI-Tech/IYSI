import "./analysis.css";
import Form from "./Form";
import { data } from "./Data";
import Swot from "./Swot";
import { useEffect } from "react";
import Aos from "aos";

const Analysis = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="analysis container">
      <div className="center">
        <h1>A roadmap for success</h1>
        <p>Our Comprehensive curriculum, Designed for professionals</p>
        <div className="swot" >
          <div className="swot-text" >
            <h1 data-aos="fade-right" data-aos-once="true">SWOT Analysis</h1>
            <p data-aos="fade-right" data-aos-once="true">
              Our training programs will cover a wide range of architectural
              software tools and technologies, including AutoCAD, Revit,
              SketchUp, Rhino: 3ds Max, and BIM software. We will offer
              workshops, seminars, and hands-on training sessions to provide
              students with practical, real-world experience. In addition to
              training programs, LYSI Hub will provide professional
              architectural services, including design consultations, drafting,
              modeling, and project management.
            </p>
            <div>
              <h1>Strength</h1>
              {Object.keys(data).map((key, index) => (
                <Swot key={key} data={data[key]} index={index} />
              ))}
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
