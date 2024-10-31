import heroImg from "../../assets/images/hero-img.png";
import bgHero from "../../assets/images/left-hero.png";
import CTA_Btn from "../cta_button";
import "../../assets/styles/components/home/hero.css";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col  lg:flex-row gap-0 lg:h-auto h-screen">
      {/* Left section with background image and content */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full lg:w-[57%] flex flex-col justify-center lg:h-auto h-screen"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="px-8 lg:px-16 pt-14  lg:pt-20 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col gap-6">
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
            <CTA_Btn type={"cta_hero_mobile"} text={"Explore Now"} />
          </div>
        </div>
      </div>

      {/* Right section with image, hidden on small screens */}
      <div className="right-img w-full md:w-[43%] hidden md:block">
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
