import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import TestimonialPerson from "../../assets/images/testimonial_person.jpg"
import { useEffect, useState } from 'react';
import fetchTestimonials from '../../functions/testimonials/fetchTestimonials';
const Testimonials_Carousel = ({setSwiperInstance}) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchTestimonials(setLoading, setTestimonials, setError)
  }, []);

    return    <Swiper
    className='testimonial_card h-[100%]'
    modules={[Navigation]}
    speed={1000}
    slidesPerView={1}
    loop={true} 
    onSwiper={(swiper) => setSwiperInstance(swiper)} 
  >
   {
    testimonials && testimonials.map((testimonial)=> (
      <SwiperSlide className="h-[100%] testimonial_slide flex flex-col lg:gap-4 gap-12 lg:items-start items-center">
      <img src={testimonial.witness_image} alt="user testimonial profile" className='w-[6rem] h-[6rem] ' />
    <div className="flex flex-col gap-6">
  <blockquote className="font-size-paragraph-large">
      <em>" </em>{testimonial.testimony_text}<em>"</em>
  </blockquote>
  <cite className='text-l'>@{testimonial.username}</cite>
</div>
  </SwiperSlide>
    ))
   }
 
   
    
   
  
  </Swiper>
}
export default Testimonials_Carousel