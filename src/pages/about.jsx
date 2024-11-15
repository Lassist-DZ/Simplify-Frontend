import { useState } from "react";
import Navbar from "../components/navbar";
import AboutUsHero from "../components/aboutus/AboutUsHero";
import WhoAreWe from "../components/aboutus/WhoAreWe";
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="relative">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AboutUsHero />
      <WhoAreWe />
    </main>
  );
};
export default About;
