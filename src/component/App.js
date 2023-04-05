import React from "react";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./footer";
import Education from "./Education";

function App() {
  // const [isMobile, setIsMobile] = useState(false)

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //     setIsMobile(true)
  //   } else {
  //     setIsMobile(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // })
  return (
    <div>
      <Home />
      <br />
      <br />
      <br />
      <br />

      <About />

      <br />
      <br />
      <br />
      <Education />

      <Skill />

      <br />
      <br />
      <br />

      <Work />

      <br />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
