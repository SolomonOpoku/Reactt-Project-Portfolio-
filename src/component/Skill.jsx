import React from "react";


function Skill() {
  return (
    <div id="skillSection" class="skillContainer">
      <div class="container">
        <div class="skillHeader">
          <h2 class="skill">
            My <span>Skills</span>
          </h2>
          <p class="skillParagrah skillMobileParagrah">
            I have gain knowledge in the following set of skills, of which I use
            in developing, designing and deploying web applications
          </p>
        </div>

        <div class="row">
          <div class="col">
            <img className="html htm" src="/image/HTML5.png" alt="" />

            <ul className="skillUl">
              <li class="list ht">HTML</li>
              <p className="skillListParagraph">I use html for creating web pages</p>
            </ul>
          </div>

          <div class="col">
            <img className="css htm" src="/image/css3.png" alt="" />

            <ul className="skillUl">
              <li class="list ht cs">CSS</li>
              <p className="skillListParagraph">I use css for styling web pages</p>
            </ul>
          </div>

          <div class="col">
            <img className="bootstrap htm" src="/image/Bootstrap.png" alt="" />

            <ul className="skillUl">
              <li class="list boot">BOOTSTRAP</li>
              <p className="skillListParagraph">
                I use bootstrap for creating responsive web pages
              </p>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img className="js htm" src="/image/javascript.png" alt="" />

            <ul className="skillUl">
              <li class="list jscript">JAVASCRIPT</li>
              <p className="skillListParagraph">I use javascript for making functional web pages</p>
            </ul>
          </div>

          <div class="col">
            <img className="jquery" src="/image/JQuery.png" alt="" />

            <ul className="skillUl">
              <li class="list">JQUERY</li>
              <p className="skillListParagraph">
                It's a Js library I use for making functional web pages
              </p>
            </ul>
          </div>

          <div class="col">
            <img className="html node" src="/image/node.png" alt="" />

            <ul className="skillUl">
              <li class="list">NODEJS</li>
              <p className="skillListParagraph">I use nodejs for Backend developing of web apps</p>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img className="html mongo" src="/image/mongo.png" alt="" />

            <ul className="skillUl">
              <li class="list mongoDB">MONGODB</li>
              <p className="skillListParagraph">I use mongoDB for storing data from web apps</p>
            </ul>
          </div>

          <div class="col">
            <img className="github htm" src="/image/Github1.png" alt="" />

            <ul className="skillUl">
              <li class="list">GITHUB</li>
              <p className="skillListParagraph">
                I use Github for publishing my projects in an open source for
                everyone to see
              </p>
            </ul>
          </div>

          <div class="col">
            <img className="html react" src="/image/react.png" alt="" />

            <ul className="skillUl">
              <li class="list">REACTJS</li>
              <p className="skillListParagraph">
                It's a Frontend library that make creating web apps easier
              </p>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img className="html express" src="/image/express.png" alt="" />

            <ul className="skillUl">
              <li class="list expressJS">EXPRESSJS</li>
              <p className="skillListParagraph">
                It's a Backend library that helps me develop web apps easier
              </p>
            </ul>
          </div>

          <div class="col">
            <img className="html react" src="/image/git.png" alt="" />

            <ul className="skillUl">
              <li class="list ht cs">GIT</li>
              <p className="skillListParagraph">I use Git for tracking my Projects</p>
            </ul>
          </div>

          <div class="col">
            <img className="html htm" src="/image/postman.png" alt="" />

            <ul className="skillUl">
              <li class="list postman">POSTMAN</li>
              <p className="skillListParagraph">I use Postman for creating and testing APIs </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  }
export default Skill;
