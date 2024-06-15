
import "./partnerWithUs.css";
import Lazyloading from "../../template/Lazyloading";
import a from "../../asset/images/partner.webp";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const PartnerWithUs = () => {
  return (
    <div className="container partner-with-us">
      <div className="center">
        <Lazyloading src={a} alt="parther" />
        <div>
          <h1>Partner with Us</h1>
          <h3>Collaborate with NextEd: Building the Furture Together</h3>
          <p>
            At NextEd, we believe that strong partnerships are key to advancing
            the field of architecture. By collaborating with us, you can help
            shape the next generation of architects, drive innovation, and
            promote diversity within the industry.
          </p>
          <p>
            Governments and organizations with the desire to create
            opportunities and build a future where architecture thrives on
            creativity, inclusivity, and excellence can do that with NextEd.
          </p>
          <Link to="CommunityRouteTwo" className="btn">
            Get in Touch <GoArrowRight size="20" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
