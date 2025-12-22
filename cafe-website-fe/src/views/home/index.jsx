import {motion} from 'framer-motion';

import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";
import RevealText from '../../components/revealText';

function HomeView() {
  const interior1 = useFadeInOnView({ animation: 'fadeInRight' });
  const interior2 = useFadeInOnView({ animation: 'fadeInLeft' });
  const interior3 = useFadeInOnView({ animation: 'fadeInRight' });

  return (
    <div className="bg-[#FFF8E1] w-[100vw]">
      <div id="page1" className="flex flex-col min-h-[100svh] bg-[#FFE0B2]">
        <div className="">
          <SwiperCarousel />
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
      <div className="w-full text-center my-20 flex flex-col justify-center items-center">
        <RevealText className={''} text={'A Feeling, Not'}/>
        <RevealText className={'mb-4'} text={'Just a Place'}/>
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

      {/* <div id="page3" className="!text-black my-10 mx-5">
        <Specials />
      </div> */}
    </div>
  )
}

export default HomeView;