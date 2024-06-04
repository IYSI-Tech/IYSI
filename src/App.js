
import "./App.css";
import Header from "./component/header/Header.jsx";
import Banner from "./component/banner/Banner.jsx";
import Feeds from "./component/feeds/Feeds.jsx";
import Courses from "./component/courses/Courses.jsx";
import Analysis from "./component/analysis/Analysis.jsx";
import Project from "./component/project/Project.jsx";
import FeaturedEvents from "./component/featured-events/FeaturedEvents.jsx";
import Clients from "./component/clients/Clients.jsx";
import Footer from "./component/footer/Footer.jsx";
import WhoWeAre from "./component/who-we-are/WhoWeAre.jsx";
import Mission from "./component/mission/Mission.jsx";
import Connect from "./component/connect/Connect.jsx";
import UpcomingEvents from "./component/upcoming-events/UpcomingEvents.jsx";
import PartnerWithUs from "./component/partner-with-us/PartnerWithUs.jsx";
import Hire from "./component/hire/Hire.jsx";
import LetUsKnow from "./component/let-us-know/LetUsKnow.jsx";
import Newsletter from "./component/newsletter/Newsletter.jsx";
import HaveAnIdea from "./component/have-an-idea/HaveAnIdea.jsx";

function App() {

  return (
    <div className="App app-container">
      <Header />
      <Banner />
      <Feeds />
      <Mission />
      <WhoWeAre />
      <Courses />
      <Analysis />
      <Connect />
      <Project />
      <Clients />
      <FeaturedEvents />
      <UpcomingEvents />
      <PartnerWithUs />
      <Hire />
      <LetUsKnow />
      <Newsletter />
      <HaveAnIdea />
      <Footer />
    </div>
  );
}

export default App;
