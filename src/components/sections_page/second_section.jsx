import "./second_section.css";
import { Element } from "react-scroll";
import Cards from "../cardProject/card_proyect.jsx";
import rf from "../../img/bk/bk_r1/g24.png";
import rf2 from "../../img/bk/bk_r1/g25.png";

function Second_Section() {
  return (
    <>
      <Element name="section2">
        <section className=" second-section ">
        <img className="br23" src={rf} alt="float_rock" />
        <img className="br24" src={rf2} alt="float_rock" />
          <div className="container">
            <h1 className="display-4">Projects</h1>
            <Cards />
          </div>
        </section>
      </Element>
    </>
  );
}

export default Second_Section;
