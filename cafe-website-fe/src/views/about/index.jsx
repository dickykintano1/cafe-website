import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutView() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="inline-block bg-[#FFF8E1] w-[100vw] max-w-[100vw] h-[200vh] px-5 pt-15 pb-25">
      <ScrollIndicator targetRef={sectionRef}/>
      <div className="h-100 w-full -mt-[80svh] bg-black md:bg-red-200 lg:bg-blue-200 xl:bg-yellow-200 2xl:bg-green-200"></div>

      
    </section >
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

  // This maps the scroll to a movement from -100% to 0%
  // This keeps the "bottom" of the container aligned with the scroll progress
  const yProgress = useTransform(scaleY, [0, 1], ["0%", "80svh"]);

  return (
    <div className="sticky top-20 ml-[98%] w-1 h-[80svh] flex justify-center">
      {/* Track */}
      <div className="absolute top-0 w-[3px] h-full bg-black/50 z-40" />

      {/* Ball */}
      <motion.div
        className="absolute w-5 h-5 bg-black rounded-full shadow-lg z-50"
        style={{
          y: yProgress,
          maskImage:
            "radial-gradient(circle 5px at center, transparent 95%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 5px at center, transparent 95%, black 100%)",
        }}
      />
    </div>
  );
}