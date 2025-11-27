function HomeView(){
  return (
  <div className="">
    <div id="page1" className="flex flex-col min-h-[calc(100svh-60px)]">
      <div id="title" className="flex flex-col overflow-hidden h-[30vh] items-center w-full bg-white !text-black">
        <div className="flex items-center h-[100%] text-center">
          Ardell's <br></br>
          Where good coffee meets good people
        </div>
      </div>
      <div id="Image1" 
        className="
          w-full 
          flex-1
          bg-yellow-100 
          bg-[url(/img/exterior.png)]
          bg-center
          bg-cover
        "
      >
      </div>
    </div>

    <div id="page2" className="flex flex-col min-h-[calc(100svh-60px)]">
      <div className="flex text-3xl w-full h-[80px] items-center justify-center">Our specialty</div>
      <div id="coffeeImage" className="w-full h-10 bg-[url(/img/coffee.png)] bg-cover bg-center"></div>
      <div id="welcomeText" className="w-full h-[65vh] bg-blue-100"></div>
    </div>

    <div id="page3" className="bg-yellow-100 min-h-[calc(100svh-60px)]">
      <div id="title" className="">hehey</div>
    </div>
  </div>
  )
}

export default HomeView;