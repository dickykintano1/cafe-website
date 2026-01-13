import {motion} from "framer-motion"
import { Link } from "react-router";

const MenuGrid = () => {
  // const textStyle = 'font-DMSerif text-5xl md:text-8xl tracking-[0.001rem] cursor-pointer hover:underline' 
  const textStyle = `
  font-DMSerif text-5xl md:text-8xl
    inline-block
    relative 

    after:absolute 
    after:bottom-0 
    after:left-0 
    after:h-[4px] 
    after:w-full 
    after:scale-x-0 
    after:bg-current 
    after:transition-transform 
    after:duration-500 
    after:ease-in-out 
    after:origin-left 

    hover:after:scale-x-100 
    hover:after:origin-left
`;
  // Parent variants to coordinate children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="w-full bg-[#FDF8E1] h-[40svh] my-20 overflow-none">
      <motion.div
        className="h-full flex flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of container is visible
      >
        <div className="flex flex-row justify-center items-center">
          <motion.div variants={itemVariants}>
            <Link to="/coffee" className={`${textStyle} text-black`}>COFFEE</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/pastry" className={`${textStyle} text-orange-700`}>PASTRY</Link>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <motion.div variants={itemVariants}>
            <Link to="/tea" className={`${textStyle} text-black`}>TEA</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/pasta" className={`${textStyle} text-orange-700`}>PASTA</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/accessories" className={`${textStyle} text-black`}>ACCS</Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuGrid;