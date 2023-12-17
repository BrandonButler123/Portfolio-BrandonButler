import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div id="about-container">
        <div id="aboutContent">
          <div id="aboutMainConent">
            <h1>Hi, I'm Brandon.</h1>
            <h1>I am an aspiring Software Developer.</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum <br></br>cupiditate
              voluptas? Laborum, voluptas natus?
            </p>
            <div id="btnDiv">
              <button>
                <a href="#contact" id="hireMeBtn">
                  <Link
                    to="main-container-contact"
                    smooth={true}
                    duration={500}
                  >
                    Work With Me
                  </Link>
                </a>
              </button>
              <button id="projectsBtnBtn">
                <a href="#projects" id="projectsBtn">
                  {" "}
                  <Link
                    to="main-container-projects"
                    smooth={true}
                    duration={500}
                  >
                    See My Past Work
                  </Link>
                </a>
              </button>
            </div>
          </div>
          <div id="aboutPicture">
            <img
              src="./headshot2.jpeg"
              alt="headshot"
              style={{ width: 300, height: 300, borderRadius: 150 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
