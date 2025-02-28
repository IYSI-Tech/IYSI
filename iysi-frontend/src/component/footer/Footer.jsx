
import "./footer.css";
import Lazyloading from "../../template/Lazyloading";
import a from "../../asset/images/logo64.webp";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="contact-us">
      <div className="center">
        <div className="footer-sub">
          <div className="logo-container">
            <a className="logo" href="/" title="logo">
              <Lazyloading className="logo-img" src={a} alt="logo" />
            </a>
          </div>
          <nav className="nav-link">
            <ul>
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#about-us">About Us</a>
              </li>
              <li>
                <a href="/#events">Events</a>
              </li>
              <li>
                <a href="/#blogs">Blogs</a>
              </li>
              <li>
                <a href="/#contact-us">Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className="icon-link">
            <a href="https://www.facebook.com/profile.php?id=61560965086958" title="facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/iysi_tech?igsh=YzljYTk1ODg3Zg==" title="instagram">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/company/iysi" title="linkedin">
              <FaLinkedinIn />
            </a>
          </nav>
        </div>
        <div className="footer-end">
          <p>
            Copyright &#169; 2024 IYSI developer | All Rights Reserved |{" "}
            <a href="/">Terms and Conditions</a> |{" "}
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
