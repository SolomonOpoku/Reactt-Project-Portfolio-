import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>CopyrightÂ© {currentYear} </footer>
    </div>
  );
}

export default Footer;
