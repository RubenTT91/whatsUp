import React from "react";
import "./first_section.css";
import NavBar from "../navBar/navBar.jsx";
import Picture from "../../img/profile_picture.jpg";

function First_section() {
  return (
    <>
    <section className="first-section">
      <div className="container">
        <h1 class="display-4">Hello, I am Ruben Toro</h1>
        <p class="display-6">
          I'm Web Developer
        </p>        
      </div>
    </section>
    </>
  );
}

export default First_section;
