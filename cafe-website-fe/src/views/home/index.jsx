import useFadeInOnView from "../../hooks/useFadeInOnView";
import Specials from "../../components/specials";
import SwiperCarousel from "../../components/swiper";

function HomeView(){
  const interior1 = useFadeInOnView({animation:'fadeInRight'});
  const interior2 = useFadeInOnView({animation:'fadeInLeft'});
  const interior3 = useFadeInOnView({animation:'fadeInRight'});

  return (
  <div className="bg-[#FFF8E1] w-[100vw]">
    <div id="page1" className="flex flex-col min-h-[calc(100svh)]">
      <div className="flex flex-col flex-1">
        <SwiperCarousel/>
      </div>
      <div id="title" className="flex flex-col overflow-hidden h-[40vh] items-center w-full !text-black pt-10">
        <div className="flex flex-row">
          <img src='./img/logo.png' className="w-[72px] h-[72px]"/>
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

    <div id="page3" className="!text-black my-10 mx-5">
      <Specials/>
    </div>
  </div>
  )
}

export default HomeView;