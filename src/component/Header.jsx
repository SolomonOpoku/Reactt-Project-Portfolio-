import React from "react";

const screen = window.innerWidth;

function Header() {
  if (screen > 700) {
    return (
      <div class="brandContainer">
        <div>
          <img
            className="headerImage"
            src="/image/JHOKER_DEV.png"
            alt="BackgroundImage"
          />
        </div>

        <button className="gitButton" type="button">
          <a href="https://www.linkedin.com/in/solomon-yeboah-b3b8b1258">Linkedin Profile</a>
        </button>

        <div>
          <ul>
            <li id="home">
              <a href="#homeSection">HOME</a>
            </li>
            <li id="about">
              <a href="#aboutMe">ABOUT</a>
            </li>
            <li id="edu">
              <a href="#eduSection">EDUCATION</a>
            </li>
            <li id="skill">
              <a href="#skillSection">SKILLS</a>
            </li>
            <li id="work">
              <a href="#workSection">WORK</a>
            </li>
            <li id="contact">
              <a href="#contactSection">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <nav class="navbar">
        <button class="gitButton" type="button">
          <a href="https://www.linkedin.com/in/solomon-yeboah-b3b8b1258">Linkedin </a>
        </button>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
          >
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#homeSection">
                    HOME
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#aboutMe">
                    ABOUT
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#eduSection">
                    EDUCATION
                  </a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="#skillSection">
                    SKILLS
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#workSection">
                    WORK
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#contactSection">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
