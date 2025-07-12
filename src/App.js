import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import First_section from './components/sections_page/first_section.jsx';
import Second_Section from './components/sections_page/second_section.jsx';
import NavBar from './components/navBar/navBar.jsx';
import backgroundImg from'./img/background.jpg'

function App() {
  return (
   <>
   <div className="bodyMenu">
    {/* <img src={backgroundImg}/> */}
    <NavBar />     
   <First_section/>
   <Second_Section/>
   </div>   
   </>
  );
}

export default App;
