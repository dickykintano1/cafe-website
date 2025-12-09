import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";

function HomeView() {
  const interior1 = useFadeInOnView({ animation: 'fadeInRight' });
  const interior2 = useFadeInOnView({ animation: 'fadeInLeft' });
  const interior3 = useFadeInOnView({ animation: 'fadeInRight' });

  return (
    <div className="bg-[#FFF8E1] w-[100vw]">
      <div id="page1" className="flex flex-col min-h-[100svh] bg-[#FFE0B2]">
        <div className="">
          <SwiperCarousel />
        </div>
        <div id="title"
          className="
          flex flex-1 flex-col overflow-hidden items-center w-full !text-black 
          pt-10 bg-[#FFF8E1]"
        >
          <div className="flex flex-row">
            <img src='./img/logo.png' className="w-[72px] h-[72px]" />
            <span className="font-DMSerif text-7xl">Ardell's</span>
          </div>
          <span className="font-Tinos text-2xl">Tradition, Brewed. Innovation, Poured.</span>
        </div>
      </div>

      <div id="page2" className="flex flex-wrap">
        <div className="basis-1/2 px-5">
          <div ref={interior1}
            className="
          w-full h-50
          bg-[url(/img/interior1.png)] bg-cover bg-center
          transition-all duration-2000 ease-out
          "
          />
        </div>
        <div className="basis-1/2 px-5">
          <div ref={interior2}
            className="
          w-full h-80 mt-40
          bg-[url(/img/interior2.png)] bg-cover bg-center
          translate-y-5 transition-all duration-2000 ease-out
          "
          />
        </div>
        <div className="basis-1/2 px-5">
          <div ref={interior3}
            className="
          w-full h-70 
          bg-[url(/img/interior3.png)] bg-cover bg-center
          transition-all duration-2000 ease-out
          "
          />
        </div>
      </div>

      <div 
  id="page3" 
  className="flex flex-col py-24 px-6 md:px-12 bg-[#FFF8E1] !text-black overflow-hidden" // Ensure overflow-hidden for animations
>
    
    {/* --- Section Title --- */}
    <div 
      className="w-full text-center mb-20 md:mb-32"
      // Add classes for potential animation on scroll (e.g., opacity-0 translate-y-8 data-[animate='true']:opacity-100 data-[animate='true']:translate-y-0)
    >
        <h2 className="font-DMSerif text-5xl mb-4 text-amber-900">
            A Feeling, Not Just a Place
        </h2>
        <p className="font-Tinos text-xl max-w-3xl mx-auto text-gray-700">
            Every corner of Ardell's is designed to be a moment of quiet comfort and simple elegance.
        </p>
    </div>

    {/* --- COLLAGE GRID LAYOUT (Two Asymmetric Columns) --- */}
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        
        {/* === COLUMN 1 (Images staggered down) === */}
        <div className="flex flex-col">
            
            {/* IMAGE 1: Cozy Seating Area (Your image_864f5d.png top image) */}
            <div 
              className="w-full mb-10 overflow-hidden shadow-2xl rounded-lg"
              // Animation target 1: Slide in from left/fade up
            >
                <img 
                  src="/img/interior1.jpg" // Using your provided image path
                  alt="Cozy leather chair by a window on a rainy day" 
                  className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
            </div>
            
            {/* TEXT BLOCK 1: Our Story (Starts lower down the column) */}
            <div 
              className="mt-4 md:mt-24 pl-4 border-l-4 border-amber-700 max-w-sm self-start"
              // Animation target 2: Fade in text block
            >
                <h3 className="font-DMSerif text-3xl mb-3 text-amber-900">
                    The Art of Slow Living
                </h3>
                <p className="font-Tinos text-lg text-gray-700 leading-relaxed">
                    We invite you to disconnect. Our lighting is warm, our seating is deep, and our commitment is to the quiet luxury of time well spent.
                </p>
            </div>
        </div>

        {/* === COLUMN 2 (Images staggered up) === */}
        <div className="flex flex-col">
            
            {/* TEXT BLOCK 2: Coffee Equipment (Starts higher up the column) */}
            <div 
              className="mb-10 pl-4 border-l-4 border-amber-700 max-w-sm self-start"
              // Animation target 3: Fade in text block
            >
                <h3 className="font-DMSerif text-3xl mb-3 text-amber-900">
                    Precision and Passion
                </h3>
                <p className="font-Tinos text-lg text-gray-700 leading-relaxed">
                    Our bar is the heart of the café. We utilize the finest espresso equipment to ensure every shot is extracted with scientific precision and human passion.
                </p>
            </div>
            
            {/* IMAGE 2: Espresso Machine (Your image_864f5d.png center image) */}
            <div 
              className="w-full mt-4 overflow-hidden shadow-2xl rounded-lg"
              // Animation target 4: Slide in from right/fade up
            >
                <img 
                  src="/img/barista.png" // Placeholder for an equipment shot
                  alt="Espresso machine on a wooden bar with string lights" 
                  className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
            </div>
        </div>
        
    </div>
    
    {/* --- Optional: Third Image/Detail --- */}
    <div className="w-full max-w-6xl mx-auto mt-20 flex justify-center">
        <div 
          className="w-full md:w-1/2 overflow-hidden shadow-xl rounded-lg"
          // Animation target 5: Final image fade in
        >
            <img 
              src="/img/interior4.png" // Placeholder for the art wall shot
              alt="Wall decor with framed botanical prints and ambient light" 
              className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />
        </div>
    </div>

</div>

      <div id="page3" className="!text-black my-10 mx-5">
        <Specials />
      </div>
    </div>
  )
}

export default HomeView;