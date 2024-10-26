import heroImg from "../../assets/images/hero-img.png";
import bgHero from "../../assets/images/left-hero.png";
import CTA_Btn from "../cta_button";
import "../../assets/styles/components/home/hero.css";

const Hero = () => {
  return (
    <div className="hero-section flex flex-col md:flex-row gap-0">
      {/* Left section with background image and content */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full md:w-[57%] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="px-8 lg:px-16 pt-40 flex flex-col items-center md:items-start text-center md:text-left">
          <div>
            <p className="font-size-display text-neutral-600">
              <span className="bg-svg-custom inline-block">Virtual</span>{" "}
              Assistance
            </p>

            <p className="font-size-paragraph-large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              optio eaque tempora fuga quidem velit perferendis animi dolorem
              hic, vel pariatur.
            </p>
          </div>

          <div>
            <CTA_Btn type={"cta_hero"} text={"Explore Now"} />
          </div>
        </div>
      </div>

      {/* Right section with image, hidden on small screens */}
      <div className="right-img w-full md:w-[43%] hidden md:block">
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
