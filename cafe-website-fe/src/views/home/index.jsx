import { motion } from 'framer-motion';
import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";
import RevealText from '../../components/revealText';
import { Link } from 'react-router';
import ReservationWindow from '../../components/reservationWindow';
import MenuGrid from '../../components/MenuGrid';
import VisitUs from "./VisitUs";
import Gallery from "./Gallery";

export default function HomeView() {
  return (
    <>
      <main className="bg-[#FFF8E1] w-[100vw]">
        <div className="">
          <SwiperCarousel effect="fade" className='h-[60svh] mt-15' gradient
            images={["/img/barista.png", "/img/interior2.png", "/img/interior3.png"]}
          />
        </div>
        <div className='mx-5 md:mx-[25%]'>
          <Title />

          <SectionTitle title={['A feeling, not', ' just a place']}
            text={"Every corner of Ardell's is designed to be a moment of quiet comfort and simple elegance."}
          />

          <Gallery />

          <SectionTitle title={['Savour the', ' full experience']}
            text={"Get the most from the best ingredients handled with perfected crafts. We see our barista as craftsmen whose creations could be savored by anyone."}
          />

          <SwiperCarousel effect="fade" className='h-[25svh] md:h-[50svh]'
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
      flex flex-1 flex-col overflow-hidden items-center w-full !text-black 
      bg-[#FFF8E1]"
    >
      <div className="flex flex-row mt-20 justify-center items-center">
        <img src='./img/logo.png' className="w-[72px] h-[72px]" />
        <span className="font-DMSerif text-[4rem] md:text-[5rem]">Ardell's</span>
      </div>
      <span className="font-Tinos text-2xl md:text-3xl">Tradition, Brewed. Innovation, Poured.</span>
    </div>
  )
}

function SectionTitle({ title, text }) {
  return (
    <div className="w-full h-[40svh] text-center my-20 flex flex-col justify-center items-center">
      <RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl md:text-6xl lg:text-7xl text-amber-900'} phrases={title} />
      <p className="font-Tinos text-xl md:text-2xl max-w-[100%] mx-auto text-gray-700">
        {text}
      </p>
    </div>
  )
}
