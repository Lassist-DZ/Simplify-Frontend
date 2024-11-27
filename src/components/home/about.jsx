import CTA_Btn from "../cta_button";
import AboutImage from "../../assets/images/about_image.png";
import AboutMobile from "../../assets/images/about_image_mobile.png";
import "../../assets/styles/components/home/about.css";
import { Link } from "react-router-dom";
const About = () => {
    return <section className="about px-8 lg:px-16   flex items-center lg:h-screen">
     <div className="grid grid-cols-1 lg:grid-cols-2   gap-4 lg:h-max">
     <header className="about_header">
  <img src={AboutMobile} alt="About us image"  className="w-[34rem] h-auto "/>
  
</header>
  <div className="about_description flex flex-col justify-between h-full lg:text-left text-center py-8">
    <div className="about_description_content  flex flex-col lg:gap-2 gap-4 ">
      <h1>
        <span className="font-size-display">
        
Simplify: 
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
        Professional, Multilingual, and Cost-Effective Virtual Assistants
      </h1>

          <p className="font-size-paragraph-large">
          Simplify your life and business operations with our expert virtual assistants. Whether you need help with administrative tasks, customer support, or digital marketing, we’ve got you covered. Our multilingual team ensures you receive the best support in your preferred language.
          </p>
        </div>

        <Link to={"./about"}>
        <div className="about_cta">
          <CTA_Btn type={"cta_about"} text={"Learn more"} />
        </div>
        </Link>
      </div>
     </div>
    </section>
};
export default About;
