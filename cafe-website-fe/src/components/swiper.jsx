import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


export default function SwiperCarousel({images = [], effect, className, gradient}) {
  const gradientStyle = `linear-gradient(360deg, rgba(255,248,225,1) 5%, rgba(0,0,0,0) 30%)`;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={effect}
      allowTouchMove={false}
      speed={2000}
      autoplay={{
        delay: 3000, // Time in milliseconds (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}

      spaceBetween={0}
      slidesPerView={1}

      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className={`${className}`}
      style={{}}
    >
      {images.map((src, index) => (
        <SwiperSlide 
          key={index} 
          className="bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: gradient 
              ? `${gradientStyle}, url("${src}")` 
              : `url("${src}")` 
          }}
        />
      ))}
    </Swiper>
  )
}