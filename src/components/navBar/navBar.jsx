import React from "react";
import First_section from "../sections_page/first_section";
import Second_Section from "../sections_page/second_section";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mi Portafolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">0</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link to="section1" smooth={true} duration={500}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={<First_section />}
                >
                  ¿Quien soy?
                </a>
              </li>
                </Link>
              <li className="nav-item">
                <a className="nav-link" href={<Second_Section />}>
                  Mis Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
