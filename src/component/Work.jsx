import React from "react";

const screen = window.innerWidth;

function Work() {
  if (screen > 700) {
    return (
      <div id="workSection" class="workContainer">
        <div class="container">
          <div class="workHeader">
            <h2 class="workh2">
              My <span>Projects</span>
            </h2>
            <p class="workParagraph">Here are some of the projects I have worked on</p>
          </div>

          <div class="row">
            <div class="col">
              <img src="/image/web design.jpg" class="image1 pic" alt="" />
            </div>

            <div class="col">
              <img src="/image/web design 2.jpg" class="image2 pic" alt="" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <img src="/image/web design 6.jpg" class="image6 pic" alt="" />
            </div>

            <div class="col">
              <img src="/image/web design 4.jpg" class="image4 pic" alt="" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <img src="/image/web design 5.jpg" class="image5 pic" alt="" />
            </div>

            <div class="col">
              <img src="/image/web design 3.jpg" class="image5 pic" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="workSection" class="container workContainer">
        <div class="p">
          <h2 class="workh2">
            My <span>Projects</span>
          </h2>
          <p class="workMobileParagraph">Here are some of the projects I have worked on</p>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design.jpg" class="image1 pic" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design 2.jpg" class="image2 pic" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design 6.jpg" class="image6 pic" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design 4.jpg" class="image4 pic" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design 5.jpg" class="image5 pic" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col workImage">
            <img src="/image/web design 3.jpg" class="image5 pic" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
