import "./banner.css";
import { TbWorldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import a from '../../../public/logo512.png'
import Lazyloading from '../../template/Lazyloading'

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="banner container" id="home" name="banner">
      <div className="center">
        <div className="banner-txt" data-aos="fade-right" data-aos-once="true">
          <span>Specialization over generalization</span>
          <h1>
          IYSI - Empowering Architects,<br />
Shaping the Future.
          </h1>
          <Link to="community" className="btn white">
            <TbWorldSearch size="18" /> Join Community
          </Link>
        </div>
        <div className="get-in-touch" data-aos="fade-left" data-aos-once="true">
          <Lazyloading src={a}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
