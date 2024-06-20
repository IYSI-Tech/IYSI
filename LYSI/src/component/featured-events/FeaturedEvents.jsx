import "./featuredEvents.css";
import { courseFee, events } from "./Data";
import { MdLiveTv, MdLaptopMac } from "react-icons/md";
import {
  AiOutlineFieldTime,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

const icons = {
  MdLiveTv,
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
  MdLaptopMac,
};

const FeaturedEvents = () => {
  return (
    <div className="featuredEvents container" id="featuredEvents">
      <div className="center">
        <h1>Featured Events</h1>
        <div className="featured-article">
          <section className="highlight">
            <div className="highlight-sub">
              <h1>LYSI Highlights</h1>
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
            {events.map(
              ({ p, h1, date, location, time, registration }, index) => {
                return (
                  <div className="events" key={index}>
                    <span className="btn">Baze University Archi Week</span>
                    <div className="event-sub-1">
                      <h1>{h1}</h1>
                      <p>{p}</p>
                    </div>
                    <div className="event-sub-2">
                      <h1>Event Details:</h1>
                      <div>
                        <ul>
                          <li>
                            <span>Date:</span>
                            {date}
                          </li>
                          <li>
                            <span>Location:</span>
                            {location}
                          </li>
                          <li>
                            <span>Time:</span>
                            {time}
                          </li>
                          <li>
                            <span>Registration Fee:</span>
                            {registration}
                          </li>
                        </ul>

                        <button
                          onClick={() => alert("Backend services is required")}
                        >
                          Join webinar
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
