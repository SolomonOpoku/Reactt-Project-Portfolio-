import React from "react";
import Header from "./Header";

const screen = window.innerWidth;

function Home() {
  if (screen > 700) {
    return (
      <div class="homeContainer">
        <Header />

        <div id="homeSection" class="container">
          <div class="row">
            <div class="col">
              <img className="homeImage" src="/image/new.jpg" alt="Profile" />
            </div>

            <div class="col col2">
              <h2>YEBOAH SOLOMON OPOKU</h2>

              <h4>FULL STACK WEB DEVELOPER</h4>

              <p class="homeParagh">
                A Web Developer and Designer from Ghana. I create custom
                websites and web applications to help business do better online.
              </p>

              <button class="gitButton buttonResume" type="button">
                <a href="https://drive.google.com/file/d/1tyhtqvtWYVLoOkETDVKbkD-_OMBLLVUu/view">Resume</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="homeSection" class="homeContainer">
        <Header />
        <div>
          <img className="homeMobileImage" src="/image/new.jpg" alt="Profile" />
        </div>

        <div className="homeName">
          <h2>YEBOAH SOLOMON OPOKU</h2>

          <h5>FULL STACK WEB DEVELOPER</h5>

          <div class="container">
            <p>
              A Web Developer and Designer from Ghana. I create custom websites
              and web applications to help business do better online.
            </p>

            <button class="gitButton buttonResume" type="button">
              <a href="https://drive.google.com/file/d/1tyhtqvtWYVLoOkETDVKbkD-_OMBLLVUu/view">Resume</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
