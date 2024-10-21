import React from "react";
import heroImg from "../../assets/images/hero-img.png";
import bgHero from "../../assets/images/left-hero.png";
import ExploreBtn from "../components/buttons/ExploreBtn";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default LandingPage;

const HeroSection = () => {
  return (
    <div className="hero-section flex gap-0">
      {/* Left section with background image and content */}
      <div
        className="bg-cover bg-center bg-no-repeat w-[57%] flex flex-col justify-center p-10"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <h1>Virtual Assistance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          optio eaque tempora fuga quidem velit perferendis animi dolorem hic,
          vel pariatur.
        </p>

        <ExploreBtn />
      </div>

      {/* Right section with image */}
      <div className="w-[43%]">
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
