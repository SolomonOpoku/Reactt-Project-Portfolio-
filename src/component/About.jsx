import React from "react";

const screen = window.innerWidth;

function About() {
  if (screen > 700) {
    return (
      <div id="aboutMe" class="container">
        <div class="row">
          <div class="col">
            <img class="about" src="/image/AboutMe.gif" alt="AboutMe" />
          </div>

          <div class="col">
            <h2>
              About<span>Me</span>
            </h2>
            <h4>
              Hello! <span class="there">There</span>{" "}
            </h4>

            <p class="expe">
              I am Solomon a student of Accra Institute of Technology (AiT)
              pursuing a Degree in Information Technology (I.T). I like web
              application development and mobile application development.
            </p>

            <div class="contactContainer">
              <ul>
                <li className="con">
                  {" "}
                  <a href="tel: +233576760647">
                    <span className="fa fa-phone" />
                  </a>
                </li>
                <li className="con">
                  {" "}
                  <a href="https://www.facebook.com/Solomon Yeboah">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="con">
                  {" "}
                  <a href="https://www.instagram.com/jhoker_dev">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
                <li className="con">
                  {" "}
                  <a href="mailto: jhokerdev@gmail.com?subject = Feedback&body = Message">
                    <span className="fa fa-envelope" />
                  </a>
                </li>
                <li className="con">
                  {" "}
                  <a href="https://github.com/SolomonOpoku">
                    <span className="fa fa-github" />
                  </a>
                </li>
                <li className="con">
                  {" "}
                  <a href="https://www.linkedin.com/in/solomon-yeboah-b3b8b1258">
                    <span className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="aboutMe" class="container">
        <img class="aboutm" src="/image/AboutMe.gif" alt="AboutMe" />

        <h2>
          About<span>Me</span>
        </h2>

        <h4>
          Hello! <span class="there">There</span>{" "}
        </h4>

        <p class="expe">
          I am Solomon a student of Accra Institute of Technology (AiT) pursuing
          a Degree in Information Technology (I.T). I like web application
          development and mobile application development.
        </p>

        <div class="contactContainer">
          <ul>
            {/* <li className="con">
              {" "}
              <a href="tel: +233576760647">
                <span className="fa fa-phone" />
              </a>
            </li> */}
            {/* <li className="con">
              {" "}
              <a href="https://www.facebook.com/Solomon Yeboah">
                <span className="fa fa-facebook" />
              </a>
            </li> */}
            <li className="con">
              {" "}
              <a href="https://www.instagram.com/jhoker_dev">
                <span className="fa fa-instagram" />
              </a>
            </li>
            <li className="con">
              {" "}
              <a href="mailto: jhokerdev@gmail.com?subject = Feedback&body = Message">
                <span className="fa fa-envelope" />
              </a>
            </li>
            <li className="con hi">
              {" "}
              <a href="https://github.com/SolomonOpoku">
                <span className="fa fa-github" />
              </a>
            </li>
            <li className="con">
              {" "}
              <a href="https://www.linkedin.com/in/solomon-yeboah-b3b8b1258">
                <span className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
