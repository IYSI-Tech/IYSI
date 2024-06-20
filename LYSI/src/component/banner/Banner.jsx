import "./banner.css";
import { TbWorldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import FormContainer from "./FormContainer";
import Aos from "aos";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="banner container" id="banner" name="banner">
      <div className="center">
        <div className="banner-txt" data-aos="fade-right" data-aos-once="true">
          <span>Specialization over generalization</span>
          <h1>
          LYSI Tech Focus <br />
            Artchitect Courses <span>& GIS</span>
          </h1>
          <p>
            &#34;Master cutting edge technology and architectural principles
            with live, interative sessions lied by industry renowned
            mentors.&#34;
          </p>
          <h2>Live Interactive Webinar Event</h2>
          <Link to="CommunityRouteOne" className="btn white">
            <TbWorldSearch size="18" /> Join Community
          </Link>
        </div>
        <div className="get-in-touch" data-aos="fade-left" data-aos-once="true">
          <h1>We&#39;re here to help!</h1>
          <p>Lets us know who are and course you&#39;d be interested in!</p>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default Banner;
