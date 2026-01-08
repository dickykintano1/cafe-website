import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ReservationWindow from "../../components/reservationWindow";
import ScrollIndicator from "../../components/scrollIndicator";

export default function CoffeeView() {
  const sectionRef = useRef(null);

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] text-black pr-20 pb-30">
          <div className="mt-30 text-5xl font-bold font-DMSerif">Coffee</div>
          <div className="mt-15 text-3xl">Beans Selection</div>
          <div className="mt-5 text-base">
            <p>Colombia Washed — soft, balanced, sweet</p>
            <p>Brazil Natural — warm, nutty, comforting</p>
            <p>Ethiopia Natural — bright, expressive, fruity</p>
          </div>
          <div className="mt-10 text-base">However, the true transformation occurred when the craft met the community. As the founder began brewing for friends and fellow enthusiasts, a new realization took hold: the technical reward of a perfect brew pale in comparison to the joy of sharing it. The act of service turned a solitary passion into a collective experience. We discovered that coffee tastes better when it serves as a bridge between people, shifting our focus from the science of the bean to the soul of the guest.</div>
          <div className="mt-15 text-base">Today, this cafe is the realization of that shared joy. While our heart remains rooted in specialty black coffee, we have expanded our table to offer a complete sensory experience. From artisanal cakes and seasonal kitchen offerings to curated souvenirs that allow you to take a piece of our world home, every detail is handled with the same precision as our pour-overs. We no longer just brew for ourselves; we brew to create a space where quality and hospitality meet.</div>
        </div>
      </div>
    </section>
  );
}