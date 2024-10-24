import "../../assets/styles/components/home/testimonials.css";


import { useState } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Testimonials_Carousel from "./testimonials_carousel";

const Testimonial = () => {
    const [swiperInstance, setSwiperInstance] = useState(null); // Store swiper instance
    return (
      <section className="testimonials px-8 lg:px-16 lg:pt-[120px] lg:pb-20  p-20 gap-16 flex flex-col lg:h-screen">
        <header className="testimonials_header hidden lg:block ">
          <h1>Testimonials</h1>
        </header>
       

        <div className="testimonials_description lg:px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="title flex flex-col lg:gap-8  gap-6  items-center lg:items-start  lg:justify-center justify-start">
            <h1 className="font-size-display">We are trusted <br/>by our clients </h1>
            <div className="swiper-nav-btns flex gap-4">
            <button onClick={() => swiperInstance?.slidePrev()}>
              <ArrowLeft />
            </button>
            <button onClick={() => swiperInstance?.slideNext()}>
              <ArrowRight />
            </button>
          </div>
          </div>
       <Testimonials_Carousel setSwiperInstance={setSwiperInstance}/>
        
        </div>
      </section>
    );
};

export default Testimonial;
