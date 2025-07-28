import React from "react";
import "./third_section.css";
import { Element } from "react-scroll";
import DataT from "../../services/data_tecnologies";

function ThirdSection() {
  const TECH = DataT;
  return (
    <>
      <Element name="section3">
        <section className=" third-section ">
          <div className="container">
            <h1 className="display-3">my knowledge</h1>
            <div className="kind-sections">
              <h4>Languages & Frameworks</h4>
              <div className="technologies-buttons continaers">
                {TECH.map((element) =>
                  element.kind === "lenguages" ||
                  element.kind === "framework" ? (
                    <button type="button" class="btn btn-outline-light">
                      <p className="level">{element.level}</p>
                      <div className="renglon1">
                        {element.svg}
                        {element.title}
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>
            <div className="kind-sections">
              <h4 className="display-6">Certifications</h4>
              <div className="technologies-buttons continaers">
                {TECH.map((element) =>
                  element.kind === "certifications" ? (
                    <button type="button" class="btn btn-outline-light">
                      <p className="level">{element.level}</p>
                      <div className="renglon1">
                        {element.svg}
                        {element.title}
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>
            <div className="kind-sections">
              <h4>Data & Tools</h4>
              <div className="technologies-buttons continaers">
                {TECH.map((element) =>
                  element.kind === "data" ? (
                    <button type="button" class="btn btn-outline-light">
                      <p className="level">{element.level}</p>
                      <div className="renglon1">
                        {element.svg}
                        {element.title}
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>
            <div className="kind-sections">
              <h4>Development Tools</h4>
              <div className="technologies-buttons continaers">
                {TECH.map((element) =>
                  element.kind === "devtools" ? (
                    <button type="button" class="btn btn-outline-light">
                      <p className="level">{element.level}</p>
                      <div className="renglon1">
                        {element.svg}
                        {element.title}
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default ThirdSection;
