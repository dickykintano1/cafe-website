function HomeView(){
  return (
  <div className="">
    <div id="page1" className="flex flex-col min-h-[calc(100svh-60px)] bg-[#FFE0B2]">
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
          Where good coffee meets good people
        </div>
      </div>
    </div>

    <div id="page2" className="flex flex-wrap bg-[#FFE0B2]">
      <div className="basis-1/2 px-5">
        <img id="interior1" 
          className="
          w-full h-50 
          bg-[url(/img/interior1.png)] bg-cover bg-center"
        />
      </div>
      <div className="basis-1/2 px-5">
        <img id="interior1" 
          className="
          w-full h-100 mt-40 
          bg-[url(/img/interior2.png)] bg-cover bg-center"
        />
      </div>
      <div className="basis-1/2 px-5">
        <img id="interior1" 
          className="
          w-full h-50 
          bg-[url(/img/interior3.png)] bg-cover bg-center"
        />
      </div>
      {/* <div id="welcomeText" className="flex-1 w-full h-full bg-transparent"></div> */}
    </div>

    <div id="page3" className="min-h-[calc(100svh-60px)] bg-[#FFE0B2]">
      <div id="title" className="">hehey</div>
    </div>
  </div>
  )
}

export default HomeView;