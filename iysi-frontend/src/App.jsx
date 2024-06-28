
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";


function App() {

  return (
    <div className="App app-container">
      <Header />
      <Outlet /> 
      <Footer /> 
    </div>
  );
}

export default App;
