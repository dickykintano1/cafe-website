import { motion } from 'framer-motion';
import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";
import RevealText from '../../components/revealText';
import LightingPanel from '../../components/lightingPanel';
import { Link } from 'react-router';
import ReservationWindow from '../../components/reservationWindow';
import ReservationWindow2 from '../../components/reservationWindow2';
import MenuGrid from '../../components/MenuGrid';
import VisitUs from "./VisitUs";
import Gallery from "./Gallery";

export default function HomeView() {
  return (
    <>
      <main className="bg-[#FFF8E1] w-[100vw]">
        <div className="relative">
          <div data-menu-light className="bg-[url('/img/soyoung-han-f4q4QejWENw-unsplash.jpg')] bg-cover bg-center scale-x-[-1] h-[100svh] z-9">
            {/* <SwiperCarousel effect="fade" className='h-[100svh] mt-15' gradient
              images={["/img/barista.png", "/img/interior2.png", "/img/interior3.png"]}
            /> */}
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10'>

          </div>
          <div className='z-10 absolute top-0 h-full ml-5 md:ml-20 flex justify-center items-center'>
            <Title />
          </div>
        </div>
        <div className='relative isolate flex flex-col mx-5 md:max-w-5xl md:mx-auto'>
          <SectionTitle title={['A feeling, not', ' just a place']}
            text={"Every corner of Ardell's is designed to be a moment of quiet comfort and simple elegance."}
          />

          <Gallery />

          <SectionTitle title={['Savour the', ' full experience']}
            text={"Get the most from the best ingredients handled with perfected crafts. We see our barista as craftsmen whose creations could be savored by anyone."}
          />

          <SwiperCarousel effect="fade" className='w-full h-[25svh] md:h-[50svh]'
            images={["/img/barista2.png", "/img/coffee5.png", "/img/cake.png"]}
          />


          <MenuGrid />
        </div>

        <VisitUs />
      </main>
      <ReservationWindow />
    </>

  )
}

function Title() {
  return (
    <div className="
      flex flex-1 flex-col items-start w-full text-start
      bg-transparent"
    >
      <div className="flex flex-row mt-20 justify-center items-center">
        <img src='./img/logo.png' className="md:block w-[72px] h-[72px] invert" />
        <span className="font-DMSerif text-[4rem] md:text-[5rem] leading-none">Ardell's</span>
      </div>
      <div className='w-full flex flex-row justify-center items-center gap-1'>
        <div className='h-[2px] bg-white flex-1' />
        <div className='h-[2px] bg-white w-[4px]' />
      </div>
      <span className="font-Tinos text-2xl md:text-3xl">Tradition, Brewed. Innovation, Poured.</span>
    </div>
  )
}

function SectionTitle({ title, text }) {
  return (
    <div className="w-full h-full mt-30 mb-10 text-start flex flex-col justify-center items-start">
      {/* <div className="h-1 w-full bg-[#C89B53]">
      </div> */}
      <RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl md:text-6xl lg:text-7xl text-amber-900'} phrases={title} />
      <RevealText containerClass={'max-w-[100%] z-99 mt-10'} textClass={'font-Tinos text-xl md:text-2xl text-gray-700'} phrases={text.split('\n')} />
      <div className='h-[2px] bg-amber-900 w-[75%] self-end mt-10' />
    </div>
  )
}
