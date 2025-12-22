import {motion} from "framer-motion";

export default function RevealText({className, text}){
  return(
    <div className={`block overflow-hidden ${className}`}>
      <motion.p className="font-DMSerif text-5xl max-w-80 text-amber-900 leading-tight"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }} // Completely hidden from the bottom
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} // Revealed
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }} // Smooth "reveal" easing
        viewport={{ once: true }}
      >
        {text}
      </motion.p>
    </div>
  )
}