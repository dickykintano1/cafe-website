import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';

export default function MenuGrid({ animated = true }) {
	const { pathname } = useLocation();

	const handleClick = (to) => {
		if (pathname === to) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const textStyle = `
  font-DMSerif text-5xl md:text-7xl
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

	// Parent variants — no stagger when animation is disabled
	const containerVariants = animated
		? {
			hidden: { opacity: 0 },
			visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
		}
		: {
			hidden: { opacity: 1 },
			visible: { opacity: 1 },
		};

	// Child variants — instant reveal when animation is disabled
	const itemVariants = animated
		? {
			hidden: { clipPath: 'inset(0% 0% 100% 0%)', y: 20 },
			visible: {
				clipPath: 'inset(0% 0% 0% 0%)',
				y: 0,
				transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
			},
		}
		: {
			hidden: { clipPath: 'inset(0% 0% 0% 0%)', y: 0 },
			visible: { clipPath: 'inset(0% 0% 0% 0%)', y: 0 },
		};

	return (
		<section className="w-full bg-[#FDF8E1] h-[40svh] overflow-none">
			<motion.div
				className="h-full flex flex-col justify-center items-center"
				variants={containerVariants}
				initial="hidden"
				{...(animated
					? { whileInView: 'visible', viewport: { once: true, amount: 0.3 } }
					: { animate: 'visible' })}
			>
				<div className="flex flex-row justify-center items-center">
					<motion.div variants={itemVariants}>
						<Link to="/menu/coffee" className={`${textStyle} text-black`} onClick={() => handleClick('/coffee')}>COFFEE</Link>
					</motion.div>
					<motion.div variants={itemVariants}>
						<Link to="/menu/pastry" className={`${textStyle} text-orange-700`} onClick={() => handleClick('/pastry')}>PASTRY</Link>
					</motion.div>
				</div>
				<div className="flex flex-row justify-center items-center">
					<motion.div variants={itemVariants}>
						<Link to="/menu/tea" className={`${textStyle} text-black`} onClick={() => handleClick('/tea')}>TEA</Link>
					</motion.div>
					<motion.div variants={itemVariants}>
						<Link to="/menu/pasta" className={`${textStyle} text-orange-700`} onClick={() => handleClick('/pasta')}>PASTA</Link>
					</motion.div>
					<motion.div variants={itemVariants}>
						<Link to="/accessories" className={`${textStyle} text-black`} onClick={() => handleClick('/accessories')}>ACCS</Link>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};