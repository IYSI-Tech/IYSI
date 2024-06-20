
import "./footer.css";
import Lazyloading from "../../template/Lazyloading";
import a from "../../asset/images/logo64.webp";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="center">
        <div className="footer-sub">
          <div className="logo-container">
            <a className="logo" href="/">
              <Lazyloading className="logo-img" src={a} alt="logo" />
              <p>LYSI</p>
            </a>
          </div>
          <nav className="nav-link">
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Connect with Top Talent</a>
              </li>
              <li>
                <a href="/">Partner with Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className="icon-link">
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <AiFillInstagram />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
          </nav>
        </div>
        <div className="footer-end">
          <p>
            Copyright &#169; 2024 LYSI developer | All Rights Reserved |{" "}
            <a href="/">Terms and Conditions</a> |{" "}
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
