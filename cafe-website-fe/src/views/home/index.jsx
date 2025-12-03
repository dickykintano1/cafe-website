import useFadeInOnView from "../../hooks/useFadeInOnView";

function HomeView(){
  const interior1 = useFadeInOnView({direction:'right'});
  const interior2 = useFadeInOnView({direction:'left'});
  const interior3 = useFadeInOnView({direction:'right'});

  return (
  <div className="bg-[#FFE0B2]">
    <div id="page1" className="flex flex-col min-h-[calc(100svh-60px)]">
      <div className="flex flex-col flex-1">
        <div id="Image1" 
          className="
            w-full 
            flex-1
            bg-center bg-cover
            bg-[linear-gradient(360deg,rgba(255,224,178,1)_0%,rgba(0,0,0,0)_30%),url('/img/exterior.png')]
          "
        >
        </div>
        {/* <div className="absolute bottom-0 bg-gradient-to-t from-[#D7CCC8] to-[#D7CCC8/0] w-full h-[25%]"></div> */}
      </div>
      <div id="title" className="flex flex-col overflow-hidden h-[30vh] items-center w-full !text-black">
        <div className="flex items-center h-[100%] text-center">
          Ardell's <br></br>
          Coffee and Bakery
        </div>
      </div>
    </div>

    <div id="page2" className="flex flex-wrap">
      <div className="basis-1/2 px-5">
        <div ref={interior1}
          className="
          w-full h-50
          bg-[url(/img/interior1.png)] bg-cover bg-center
          opacity-0 transition-all duration-2000 ease-out
          "
        />
      </div>
      <div className="basis-1/2 px-5">
        <div ref={interior2}
          className="
          w-full h-80 mt-40
          bg-[url(/img/interior2.png)] bg-cover bg-center
          opacity-0 translate-y-5 transition-all duration-2000 ease-out
          "
        />
      </div>
      <div className="basis-1/2 px-5">
        <div ref={interior3}
          className="
          w-full h-70 
          bg-[url(/img/interior3.png)] bg-cover bg-center
          opacity-0 transition-all duration-2000 ease-out
          "
        />
      </div>
    </div>

    <div id="page3" className="!text-black grid grid-cols-11 grid-rows-30 grid-flow-col h-[200svh] mt-10">
      <div className="col-span-11 row-span-1 ml-5 flex justify-center items-center">
        <span className="font-medievalSharp text-4xl underline">Our Specials</span>
      </div>
      <div className="col-span-5 row-span-6 bg-red-200 ml-5">
        <div className="text-3xl">Latte</div>
        <div className="mt-3">Espresso-based coffee drink made with steamed milk and a thin layer of frothed milk on top</div>
      </div>
      <div className="col-span-3 row-span-23 bg-red-200">hello</div>

      <div className="col-span-1 row-span-29 flex justify-center items-center">
        <hr className="h-full w-2 mt-5 rounded-full bg-orange-900"></hr>
      </div>

      {/* <div className="col-span-5 row-span-30 bg-green-200">hello</div> */}
    </div>
  </div>
  )
}

export default HomeView;