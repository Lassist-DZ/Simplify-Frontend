import { useState } from "react";
import Navbar from "../components/navbar";
import AboutUsHero from "../components/aboutus/AboutUsHero";
import WhoAreWe from "../components/aboutus/WhoAreWe";
import WhyChooseUs from "../components/aboutus/WhyChooseUs";
import CtaSection from "../components/home/CtaSection";
import JoinUs from "../components/aboutus/JoinUs";
import Footer from "../components/footer";
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="relative">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AboutUsHero />
      <WhoAreWe />
      <WhyChooseUs />
      <JoinUs />
      <Footer/>
    </main>
  );
};
export default About;
