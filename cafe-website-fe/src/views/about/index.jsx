import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import ReservationWindow from "../../components/reservationWindow";

export default function AboutView() {
  const sectionRef = useRef(null);

  return (
    <>
      <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
        <div ref={sectionRef} className="relative h-[400svh]">
          <ScrollIndicator targetRef={sectionRef}/>
          <div className="-mt-[100svh] pt-15 text-black">daa</div>
        </div>
      </section >
    <ReservationWindow/>
    </>
  );
}

function ScrollIndicator({targetRef}){
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const trackHeight = "35svh";

  const yProgress = useTransform(scaleY, [0, 1], ["0", trackHeight]);

  return (
    <div className="sticky ml-[100%] top-0 right-0 w-1 flex justify-center pr-5 h-[100svh]">
      {/* Track */}
      <div className={`absolute top-20 w-[2px] h-[${trackHeight}] bg-black/50 z-40`} />

      {/* Ball */}
      <motion.div
        className="absolute top-20 h-8 z-50 bg-[#FFF8E1] flex items-center justify-center"
        style={{y: (yProgress)}}
      ><div className=" w-2 h-2 bg-black rotate-45" /></motion.div>
    </div>
  );
}