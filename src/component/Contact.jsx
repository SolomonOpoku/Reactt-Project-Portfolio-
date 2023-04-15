import React from "react";

function Contact() {
  return (
    <div id="contactSection" className="contactcontainer">
      <h2 class="contactHeader">Contact info.</h2>

      <div class="contactContainer">
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-phone">
            {" "}
            <a className="contactLink" href="tel: +233576760647">
              ContactMe <br /> + 233 576760647{" "}
            </a>
          </span>
        </p>
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-facebook">
            {" "}
            <a className="contactLink" href="https://www.facebook.com/Solomon Yeboah">
              {" "}
              Facebook <br /> @Solomon Yeboah{" "}
            </a>
          </span>
        </p>
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-linkedin">
            {" "}
            <a
              className="contactLink"
              href="https://www.linkedin.com/in/solomon-yeboah-b3b8b1258"
            >
              {" "}
              Linkedin <br /> Solomon Yeboah
            </a>
          </span>
        </p>
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-instagram">
            {" "}
            <a className="contactLink" href="https://www.instagram.com/jhoker_dev">
              {" "}
              Instagram <br /> @jhoker_dev
            </a>
          </span>
        </p>
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-envelope">
            {" "}
            <a
              className="contactLink"
              href="mailto: jhokerdev@gmail.com?subject = Feedback&body = Message"
            >
              {" "}
              Email <br /> yeboahs324@gmail.com{" "}
            </a>
          </span>
        </p>
        <p className="contactParagraph contactMobileParagraph">
          {" "}
          <span className="contactFa fa fa-github">
            {" "}
            <a className="contactLink" href="https://github.com/SolomonOpoku">
              {" "}
              Github <br /> Solomon Yeboah
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
