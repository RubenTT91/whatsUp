import React from "react";
import "./second_section.css";
import NavBar from "../navBar/navBar.jsx";
import Picture from "../../img/profile_picture.jpg";
import { Element } from "react-scroll"


function Second_Section() {
  return (
    <>
    <Element name="section1">

    <section className="second-section">

      <div className="container">
        <h1 class="display-4">Esta es la segunda Sección</h1>
        <p class="display-6">
          Contenido de la segunda sección.
        </p>
        
      </div>
    </section>
    </Element>
    </>
  );
}

export default Second_Section;
