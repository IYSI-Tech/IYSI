import "./featuredEvents.css";
import { courseFee } from "./Data";
import Lazyloading from '../../template/Lazyloading'
import { MdLiveTv, MdLaptopMac } from "react-icons/md";
import {
  AiOutlineFieldTime,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import a from '../../asset/images/event1.jpg'
import b from '../../asset/images/event2.jpg'
import c from '../../asset/images/event3.jpg'

const icons = {
  MdLiveTv,
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
  MdLaptopMac,
};

const FeaturedEvents = () => {
  return (
    <div className="featuredEvents container" id="events">
      <div className="center">
        <h1>Featured Events</h1>
        <div className="featured-article">
          <section className="highlight">
            <div className="highlight-sub">
              <h1>IYSI Highlights</h1>
              <ul>
                {courseFee.map(({ a, p }, index) => {
                  const Iconss = icons[a];

                  return (
                    <li key={index}>
                      <Iconss className="highlight-icon" size="26" />
                      <p>{p}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="events-container">
                  <div className="events">
                    <span className="btn">Baze University Archi Week</span>
                    <div className="event-sub-1">
                      <Lazyloading src={a} alt="event1"/>
                      <Lazyloading src={b} alt="event2"/>
                      <Lazyloading src={c} alt="event3"/>
                    </div>
                  </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
