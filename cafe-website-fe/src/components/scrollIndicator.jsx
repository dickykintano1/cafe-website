//ScrollIndicator tracks the parent element scrollY position by parentRef reference.
//content on page still needs "-mt-[100svh]", to even out the sticky element here. :/

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ScrollIndicator({targetRef}){
  const trackRef=useRef(null);
  const [trackPx, setTrackPx] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackHeight = trackRef.current.offsetHeight;
    const dotSize = 32;

    setTrackPx(trackHeight - dotSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const yProgress = useTransform(scaleY, [0, 1], [0, trackPx]);

  return (
    <div className="sticky top-0 flex w-full h-[100svh]">
      {/* Track */}
      <div ref={trackRef} className={`absolute top-20 right-0 mr-[2px] w-1 h-[50svh] bg-black/50 z-40`} />

      {/* Ball */}
      <motion.div
        className="absolute top-20 right-0 h-8 w-2 z-50 bg-[#FFF8E1] flex items-center"
        style={{y: (yProgress)}}
      ><div className="w-2 h-2 bg-black rotate-45" /></motion.div>
    </div>
  );
}