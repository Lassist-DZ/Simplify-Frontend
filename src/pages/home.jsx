import { useState } from "react";
import About from "../components/home/about";
import Hero from "../components/home/hero";
import Testimonial from "../components/home/testimonial";
import Navbar from "../components/navbar";
import Pricing from "../components/home/pricing";

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
      <Pricing/>
      <Testimonial />
    </main>
  );
};

export default Home;
