import { useState } from "react";

import About from "../components/home/about";
import Hero from "../components/home/hero";
import Testimonial from "../components/home/testimonial";
import Navbar from "../components/navbar";
import CtaSection from "../components/home/CtaSection";
import JoinUs from "../components/home/JoinUS";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/FAQ";
import Footer from "../components/footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Hero />
      <About />
      {/* <CtaSection /> */}
      <Pricing />
      <Testimonial />
      <FAQ />
      <JoinUs />
      <Footer/>
    </main>
  );
};
export default Home;
