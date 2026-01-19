import {motion} from 'framer-motion';
import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";
import RevealText from '../../components/revealText';
import { Link } from 'react-router';
import ReservationWindow from '../../components/reservationWindow';

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
          <Title/>

          <SectionTitle title={['A feeling, not', ' just a place']}
            text={"Every corner of Ardell's is designed to be a moment of quiet comfort and simple elegance."}
          />

          <Gallery/>

          <SectionTitle title={['Savour the', ' full experience']}
            text={"Get the most from the best ingredients handled with perfected crafts. We see our barista as craftsmen whose creations could be savored by anyone."}
          />

          <SwiperCarousel effect="fade" className='h-[25svh] md:h-[50svh]'
            images={["/img/barista2.png", "/img/coffee5.png", "/img/cake.png"]}
          />
          

          <MenuGrid/>
        </div>

      <VisitUs/>
    </main>
    <ReservationWindow/>
    </>
    
  )
}

function Title(){
  return(
    <div className="
      flex flex-1 flex-col overflow-hidden items-center w-full !text-black 
      bg-[#FFF8E1]"
    >
      <div className="flex flex-row mt-20 justify-center items-center">
        <img src='./img/logo.png' className="w-[72px] h-[72px]" />
        <span className="font-DMSerif text-[4rem] md:text-[6rem]">Ardell's</span>
      </div>
      <span className="font-Tinos text-2xl md:text-3xl">Tradition, Brewed. Innovation, Poured.</span>
    </div>
  )
}

function SectionTitle({title, text}){
  return(
    <div className="w-full h-[40svh] text-center my-20 flex flex-col justify-center items-center">
      <RevealText containerClass={'mb-10'} textClass={'font-DMSerif text-5xl md:text-7xl text-amber-900'} phrases={title}/>
      <p className="font-Tinos text-xl md:text-2xl max-w-[100%] md:max-w-[50%] mx-auto text-gray-700">
        {text}
      </p>
    </div>
  )
}

function Gallery(){
  const interior1 = useFadeInOnView({ animation: 'fadeInRight' });
  const interior2 = useFadeInOnView({ animation: 'fadeInLeft' });
  const interior3 = useFadeInOnView({ animation: 'fadeInRight' });

  return(
    <div id="page2" className="flex flex-wrap py-5">
      <div className="basis-1/2 pr-5">
        <div ref={interior1} className="
          w-full h-50 md:h-100
          bg-[url(/img/interior1.png)] bg-cover bg-center
        "
        />
      </div>
      <div className="basis-1/2 pl-5">
        <div ref={interior2} className="
          w-full h-80 md:h-160 mt-40
          bg-[url(/img/interior2.png)] bg-cover bg-center
          translate-y-5
        "
        />
      </div>
      <div className="basis-1/2 pr-5">
        <div ref={interior3} className="
          w-full h-70 md:h-140
          bg-[url(/img/interior3.png)] bg-cover bg-center
        "
        />
      </div>
    </div>
  )
}

function MenuGrid (){
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

function VisitUs(){
  return (
    <section className="bg-[#FDF1D3] py-20 px-5 md:px-[25%] text-center text-[#5C3D2E]">
      {/* Title */}
      <h2 className="text-6xl md:text-7xl mb-10 italic  font-DMSerif">
        Visit us
      </h2>

      <div className='flex flex-col md:flex-row items-center justify-center w-full'>
        {/* Map Container */}
        <div className="w-full md:flex-1 md:max-w-[50%] mb-12 md:mb-0 shadow-sm">
          {/* Replace the 'src' with your actual Google Maps Embed link */}
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=..." 
            className="w-full h-[300px] md:h-[450px] rounded-sm border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className='md:flex-1 text-center md:text-left md:ml-10 '>
          {/* Address Section */}
          <div className="mb-16">
            <p className="text-xl md:text-2xl leading-relaxed max-w-md">
              123 Pine Street, Prosperity Alley,<br />
              Anytown, CA 90210
            </p>
          </div>

          {/* Hours Section */}
          <div className="space-y-8 text-lg md:text-xl">
            <div>
              <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Monday - Friday</h3>
              <p className="font-semibold">07:00 - 20:00</p>
            </div>
            
            <div>
              <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Saturday</h3>
              <p className="font-semibold">08:00 - 20:00</p>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Sunday</h3>
              <p className="font-semibold">08:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};