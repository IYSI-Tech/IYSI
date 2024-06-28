
import "./upcomingEvents.css";
import { upcomingEvents } from "./Data";
import Lazyloading from "../../template/Lazyloading";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div className="container upcoming-events" id="blogs">
      <div className="center">
        <h1  data-aos="zoom-in" data-aos-once="true">Upcoming Events</h1>
        <p data-aos="zoom-in" data-aos-once="true">
          where industry leaders and emerging talents will converge for an
          inspiring day of workshops, panel discussions, and networking
          opportunities aimed at shaping the future of architecture.
        </p>
        <article>
          {upcomingEvents.map(
            ({ imgPath, h1, location, description, alt }, index) => {
              return (
                <section key={index}>
                  <Lazyloading src={imgPath} alt={alt} />
                  <div data-aos="zoom-in" data-aos-once="true">
                    <h1>{h1}</h1>
                    <ul>
                      <li>
                        <span>Location:</span>
                        {location}
                      </li>
                      <li>
                        <span>Description:</span>
                        {description}
                      </li>
                    </ul>
                    <Link className="btn" to="register">
                      Register your interest <GoArrowRight size="20" />
                    </Link>
                  </div>
                </section>
              );
            }
          )}
        </article>
      </div>
    </div>
  );
};

export default UpcomingEvents;
