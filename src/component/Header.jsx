import React from 'react';

const screen = window.innerWidth;

function Header() {

  if (screen > 700) {

    return (
      <div class="brandContainer">
      <div>
        <img className="jhoker" src="/image/JHOKER_DEV.png" alt="BackgroundImage" />
      </div>

      <button class="gitButton" type="button"><a href='/home'>Linkedin Profile</a></button>
     
    <div>
      <ul>
        <li id="home"><a href="./Home">HOME</a></li>
        <li id="about"><a href="./About">ABOUT</a></li>
        <li id="skill"><a href="./Skill">SKILLS</a></li>
        <li id="work"><a href="./Work">WORK</a></li>
        <li id="contact"><a href="./Contact">CONTACT</a></li>
      </ul>
    </div> 
    </div>
  )
} else {
    return (
       <nav class="navbar">
        <button class="gitButton" type="button"><a href='/home'>Linkedin Profile</a></button>
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" >
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="Home">HOME</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="About">ABOUT</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="Skill">SKILLS</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="Work">WORK</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="Contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 
    )
  }
}
    


export default Header;