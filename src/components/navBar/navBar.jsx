import React from "react";
import First_section from "../sections_page/first_section";
import Second_Section from "../sections_page/second_section";
import { Link, Element } from "react-scroll";

function NavBar() {
  return (
    <>
      <Element name="home">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome
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
                    <a className="nav-link" href="#">
                      How am I?
                    </a>
                  </li>
                </Link>
                <Link to="section2" smooth={true} duration={500}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                </Link>
                <Link to="section3" smooth={true} duration={500}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Knowledge
                  </a>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </Element>
    </>
  );
}
export default NavBar;
