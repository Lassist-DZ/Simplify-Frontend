
import DownArrow from "../../assets/icons/down_arrow";
import "../../assets/styles/components/jobs/hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="jobs_hero-section flex items-center ">
      <div className="circles_background flex flex-col items-center gap-3 lg:pt-12 justify-center ">
        <h1 className="font-size-display">Recrutement</h1>
        <Link to={"#jobs_list"}>
        <DownArrow/>
        </Link>
      </div>
     
    </section>
  );
};

export default Hero;
