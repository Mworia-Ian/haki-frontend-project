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
    </div>
  );
}

export default Landing;
