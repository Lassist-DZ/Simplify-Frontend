import AboutImageContainer from "../../assets/icons/about_image"
import CTA_Btn from "../cta_button"
import AboutImage from "../../assets/images/about_image.png"
import AboutMobile from "../../assets/images/about_image_mobile.png"
import "../../assets/styles/components/home/about.css"
const About = () => {
    return <section className="about px-8 lg:px-16 pt-[150px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-4 items-end lg:h-screen">
        <header className="about_header relative">
  <img src={AboutImage} alt="About us image" className="hidden lg:block" />
  <img src={AboutMobile} alt="About us image" className="lg:hidden px-4" />
  <h2 className="about_header_title absolute lg:top-6 lg:right-[-110px] bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none">
    About Title
  </h2>
</header>
  <div className="about_description flex flex-col justify-between lg:h-[300px]">
    <div className="about_description_content flex flex-col gap-4">
      <h1>
        Why you choose{" "}
        <span className="font-size-display">
          Simplify
          <svg viewBox="0 0 212 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="-0.504883"
              y="14"
              width="211.183"
              height="35.007"
              rx="13.8875"
              transform="rotate(-3.9473 -0.504883 14)"
              fill="#FEDA79"
            />
          </svg>
        </span>
      </h1>

      <p className="font-size-paragraph-large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>

    <div className="about_cta">
      <CTA_Btn type={"cta_about"} text={"Learn more"} />
    </div>
  </div>
</section>

   
}
export default About