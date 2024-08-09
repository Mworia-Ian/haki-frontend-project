import Footer from "../components/Footer";
import About from "../components/Landing/About";
import Card from "../components/Landing/Card";
import Intro from "../components/Landing/Intro";
import Nav from "../components/Landing/Nav";

function Landing() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Card />
      <Footer />
    </div>
  );
}

export default Landing;
