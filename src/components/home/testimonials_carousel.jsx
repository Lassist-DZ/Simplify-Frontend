import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import TestimonialPerson from "../../assets/images/testimonial_person.jpg"
const Testimonials_Carousel = ({setSwiperInstance}) => {
    

    return    <Swiper
    className='testimonial_card h-[100%]'
    modules={[Navigation]}
    speed={1000}
    slidesPerView={1}
    loop={true} 
    onSwiper={(swiper) => setSwiperInstance(swiper)} 
  >
    <SwiperSlide className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center">
        <img src={TestimonialPerson} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
      <div className="flex flex-col gap-6">
    <blockquote className="font-size-paragraph-large">
        <em>" </em>The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.<em>"</em>
    </blockquote>
    <cite className='text-l'>@Username3</cite>
</div>
    </SwiperSlide>
    <SwiperSlide className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center">
        <img src={TestimonialPerson} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
      <div className="flex flex-col gap-6">
    <blockquote className="font-size-paragraph-large">
        <em>" </em>The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.<em>"</em>
    </blockquote>
    <cite className='text-l'>@Username3</cite>
</div>
    </SwiperSlide>
    <SwiperSlide className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center">
        <img src={TestimonialPerson} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
      <div className="flex flex-col gap-6">
    <blockquote className="font-size-paragraph-large">
        <em>" </em>The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.<em>"</em>
    </blockquote>
    <cite className='text-l'>@Username3</cite>
</div>
    </SwiperSlide>
 
   
    
   
  
  </Swiper>
}
export default Testimonials_Carousel