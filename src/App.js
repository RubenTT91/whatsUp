import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import First_section from "./components/sections_page/first_section.jsx";
import Second_Section from "./components/sections_page/second_section.jsx";
import NavBar from "./components/navBar/navBar.jsx";
import ToHome from "./components/others_commponents/To_Home.jsx";

function App() {
  return (
    <>
      <ToHome/>
      <NavBar />
      <First_section />
      <Second_Section />
    </>
  );
}

export default App;
