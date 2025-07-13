import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import First_section from "./components/sections_page/first_section.jsx";
import Second_Section from "./components/sections_page/second_section.jsx";
import NavBar from "./components/navBar/navBar.jsx";
import ToHome from "./components/others_commponents/To_Home.jsx";
import g21 from "./img/bk/bk_r1/g21.png";
import g22 from "./img/bk/bk_r1/g22.png";
import g23 from "./img/bk/bk_r1/g23.png";

function App() {
  return (
    <>

      <img className="br" src={g21} />
      <img className="br2" src={g22} />
      <img className="br3" src={g23} />
      <ToHome />
      <NavBar />
      <First_section />
      <Second_Section />
    <div className="background"> 
    </div>
    </> 
  );
}

export default App;
