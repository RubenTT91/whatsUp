import "./second_section.css";
import { Element } from "react-scroll";
import Cards from "../cardProject/card_proyect.jsx";




function Second_Section() {
  return (
    <>
      <Element name="section2">
        <section className=" second-section ">
          <div className="container">
            <h1 className="display-4">Projects</h1>
            <Cards  />
          </div>
        </section>
      </Element>
    </>
  );
}

export default Second_Section;
