import {motion} from 'framer-motion';

import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";
import RevealText from '../../components/revealText';
import MenuGrid from '../../components/menuGrid';
import VisitUs from '../../components/visitUs';
import { Link } from 'react-router';
import ReservationWindow from '../../components/reservationWindow';

function HomeView() {
  const interior1 = useFadeInOnView({ animation: 'fadeInRight' });
  const interior2 = useFadeInOnView({ animation: 'fadeInLeft' });
  const interior3 = useFadeInOnView({ animation: 'fadeInRight' });

  return (
    <>
      <main className="bg-[#FFF8E1] w-[100vw]">
      <div id="page1" className="flex flex-col min-h-[100svh] bg-[#FFE0B2]">
        <div className="">
          <SwiperCarousel effect="fade" className='h-[60svh] mt-15' gradient
            images={["/img/barista.png", "/img/interior2.png", "/img/interior3.png"]}
          />
        </div>
        <div id="title"
          className="
          flex flex-1 flex-col overflow-hidden items-center w-full !text-black 
          bg-[#FFF8E1]"
        >
          <div className="flex flex-row mt-20 justify-center items-center">
            <img src='./img/logo.png' className="w-[72px] h-[72px]" />
            <span className="font-DMSerif text-[4rem] md:text-[6rem]">Ardell's</span>
          </div>
          <span className="font-Tinos text-2xl">Tradition, Brewed. Innovation, Poured.</span>
        </div>
      </div>

      {/* --- Section Title --- */}
      <div className="w-full h-[40svh] text-center my-20 flex flex-col justify-center items-center">
        <RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl text-amber-900'} phrases={['A feeling, not', 'just a place']}/>
        <p className="font-Tinos text-xl max-w-100 mx-auto text-gray-700">
            Every corner of Ardell's is designed to be a moment of quiet comfort and simple elegance.
        </p>
      </div>

      <div id="page2" className="flex flex-wrap py-5">
        <div className="basis-1/2 px-5">
          <div ref={interior1}
            className="
          w-full h-50
          bg-[url(/img/interior1.png)] bg-cover bg-center
          transition-all duration-2000 ease-out
          "
          />
        </div>
        <div className="basis-1/2 px-5">
          <div ref={interior2}
            className="
          w-full h-80 mt-40
          bg-[url(/img/interior2.png)] bg-cover bg-center
          translate-y-5 transition-all duration-2000 ease-out
          "
          />
        </div>
        <div className="basis-1/2 px-5">
          <div ref={interior3}
            className="
          w-full h-70 
          bg-[url(/img/interior3.png)] bg-cover bg-center
          transition-all duration-2000 ease-out
          "
          />
        </div>
      </div>

      {/* --- Section Title 2--- */}
      <div className="w-full h-[40svh] text-center my-20 flex flex-col justify-center items-center">
        <RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl text-amber-900'} phrases={['Savour the', 'full experience']}/>
        <p className="font-Tinos text-xl max-w-100 mx-auto text-gray-700">
            Get the most from the best ingredients handled with perfected crafts. We see our barista as craftsmen whose creations could be savored by anyone. 
        </p>
      </div>

      <div className='px-6'>
        <SwiperCarousel effect="fade" className='h-[25svh]'
          images={["/img/barista2.png", "/img/coffee5.png", "/img/cake.png"]}
        />
      </div>

      <MenuGrid/>
      <VisitUs/>
    </main>
    <ReservationWindow/>
    </>
    
  )
}

export default HomeView;