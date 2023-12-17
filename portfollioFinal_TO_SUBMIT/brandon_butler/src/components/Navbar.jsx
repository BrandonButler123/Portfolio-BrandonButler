import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header id="navbarHeader">
      <div dir="navbarDiv">
        <nav id="navbar">
          <ul id="navbarList">
            <li id="navBarItem" className="name">
              <Link to="about" smooth={true} duration={500}>
                Brandon Bulter
              </Link>
            </li>
            <li id="verticalLine">|</li>
            <li id="navBarItem">
              <Link to="main-container-projects" smooth={true} duration={500}>
                Past Work
              </Link>
            </li>
            <li id="navBarItem">
              <Link to="main-container-skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li id="navBarItem">
              <Link to="main-container-contact" smooth={true} duration={500}>
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
