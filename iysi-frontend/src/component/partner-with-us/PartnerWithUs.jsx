
import "./partnerWithUs.css";
import Lazyloading from "../../template/Lazyloading";
import a from "../../asset/images/partner.webp";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const PartnerWithUs = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="container partner-with-us">
      <div className="center">
        <Lazyloading src={a} alt="parther" />
        <div data-aos="fade-left" data-aos-once="true">
          <h1>Partner with Us</h1>
          <h3>Collaborate with IYSI: Building the Furture Together</h3>
          <p>
            At IYSI, we believe that strong partnerships are key to advancing
            the field of architecture. By collaborating with us, you can help
            shape the next generation of architects, drive innovation, and
            promote diversity within the industry.
          </p>
          <p>
            Governments and organizations with the desire to create
            opportunities and build a future where architecture thrives on
            creativity, inclusivity, and excellence can do that with IYSI.
          </p>
          <Link to="contact-us" className="btn">
            Get in Touch <GoArrowRight size="20" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
