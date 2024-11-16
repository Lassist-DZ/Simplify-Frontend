import { useState } from "react";

import About from "../components/home/about";
import Hero from "../components/jobs/hero";
import Testimonial from "../components/home/testimonial";
import Navbar from "../components/navbar";
import CtaSection from "../components/home/CtaSection";
import JoinUs from "../components/home/JoinUS";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/FAQ";
import JobsList from "../components/jobs/jobs_list";

const Jobs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero/>
      <JobsList/>
    </main>
  );
};
export default Jobs;
