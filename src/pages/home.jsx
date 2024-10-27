import { useState } from "react";
import Footer from "../components/footer";
import About from "../components/home/about";
import Hero from "../components/home/hero";
import Testimonial from "../components/home/testimonial";
import Navbar from "../components/navbar";
import CtaSection from "../components/home/CtaSection";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-55 z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Hero />
      <About />
      <CtaSection />
      <Testimonial />
    </main>
  );
};
export default Home;
