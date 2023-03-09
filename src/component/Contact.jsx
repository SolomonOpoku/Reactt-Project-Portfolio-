import React from "react";

function Contact() {
    return (
        <div className="contactcontainer">
            <h2 class="contact">Contact info.</h2>

            <div class="contactContainer">
                <p className="exper"> <span className="ok fa fa-phone"> <a className="link" href="tel: +233576760647">ContactMe <br/> + 233 576760647  </a></span></p>
                <p className="exper"> <span className="ok fa fa-facebook"> <a className="link" href="https://www.facebook.com/Solomon Yeboah"> Facebook <br/> @Solomon Yeboah </a></span></p>
                <p className="exper"> <span className="ok fa fa-linkedin"> <a className="link" href="/home"> Linkedin <br/> Solomon Yeboah</a></span></p>
                <p className="exper"> <span className="ok fa fa-instagram"> <a className="link" href="https://www.instagram.com/jhoker_dev"> Instagram <br/> @jhoker_dev</a></span></p>
                <p className="exper"> <span className="ok fa fa-envelope"> <a className="link" href="mailto: jhokerdev@gmail.com?subject = Feedback&body = Message"> Email <br/> yeboahs324@gmail.com </a></span></p>
                <p className="exper"> <span className="ok fa fa-github"> <a className="link" href="https://github.com/SolomonOpoku"> Github <br/> Solomon Yeboah</a></span></p>
            </div>
        </div>
    )
}

export default Contact;