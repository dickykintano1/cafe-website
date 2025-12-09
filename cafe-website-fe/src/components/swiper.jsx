import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';



export default function SwiperCarousel(){
  const gradientStyle = `linear-gradient(360deg, rgba(255,248,225,1) 0%, rgba(0,0,0,0) 30%)`;

  return(
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={'fade'}
      autoplay={{
        delay: 3000, // Time in milliseconds (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}

      spaceBetween={0}
      slidesPerView={1}

      onSlideChange={()=>console.log('slide change')}
      onSwiper={(swiper)=>console.log(swiper)}
      className='w-full h-[60svh] mt-15'
      style={{}}
    >
      <SwiperSlide className='bg-cover bg-center bg-no-repeat' style={{backgroundImage:`${gradientStyle}, url("/img/exterior.png"`}}>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-blue-100'>Slide 2</SwiperSlide>
      <SwiperSlide className='bg-red-100'>Slide 3</SwiperSlide>
    </Swiper>
  )
}