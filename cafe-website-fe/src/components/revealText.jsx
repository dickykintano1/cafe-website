import { motion } from "framer-motion";

export default function RevealText({ phrases = [], containerClass, textClass }) {
  // Parent variants to coordinate children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // The 0.5s delay you requested
      },
    },
  };

  // Child variants for the specific "clipPath" reveal
  const itemVariants = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)", y: 20 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.45, 0, 0.55, 1] 
      },
    },
  };

  return (
    <>
      <motion.div
        className={`${containerClass} block md:hidden`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {phrases.map((phrase, index) => (
          <div key={index} className="overflow-hidden">
            <motion.p className={`leading-tight ${textClass}`} variants={itemVariants}>
              {phrase}
            </motion.p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className={`${containerClass} hidden md:block`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="overflow-hidden hidden md:block">
          <motion.p className={`leading-tight ${textClass}`} variants={itemVariants}>
            {phrases}
          </motion.p>
        </div>
      </motion.div>
    </>
    
  );
}