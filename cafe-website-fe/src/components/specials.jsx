export default function Specials(){
  return(
    <div className="grid grid-cols-11 grid-rows-30 grid-flow-col h-[200svh]">
      <div className="sticky top-0 bg-[#FFF8E1] col-span-11 row-span-1 flex justify-center items-center">
        <span className="font-medievalSharp text-4xl underline">Our Specials</span>
      </div>
      <div className="col-span-5 row-span-2  flex flex-col justify-center items-left">
        <div className="text-3xl">Latte</div>
        <div className="mt-3 text-sm">Coffee. Espresso-based coffee made with steamed milk and a thin layer of frothed milk on top</div>
      </div>
      <div 
        className="col-span-5 row-span-3 
        bg-[url(/img/coffee.png)] bg-cover bg-center
        "
      />
      <div className="col-span-5 row-span-4  flex flex-col justify-center items-left">
        <div className="text-3xl">Americano</div>
        <div className="mt-3">Coffee. A foundational drink combining our expertly pulled espresso with hot water. This delivers the rich, complex flavor of pure espresso in a smoother, less intense concentration</div>
      </div>
      <div 
        className="col-span-5 row-span-4 
        bg-[url(/img/coffee2.png)] bg-cover bg-center
        "
      />
      <div className="col-span-5 row-span-3  flex flex-col justify-center items-left">
        <div className="text-3xl">Cappuccino</div>
        <div className="mt-3">Coffee. Italian coffee drink made with equal parts espresso, steamed milk, and milk foam</div>
      </div>
      <div 
        className="col-span-5 row-span-4 
        bg-[url(/img/coffee3.png)] bg-cover bg-center
        "
      />
      <div className="col-span-5 row-span-4  flex flex-col justify-center items-left">
        <div className="text-3xl">Macchiato</div>
        <div className="mt-3">Coffee. A bold, concentrated shot of our signature espresso, marked (macchiato) with a small, creamy dollop of steamed milk foam. This is a robust, quick sip designed to highlight the coffee's flavor</div>
      </div>
      <div 
        className="col-span-5 row-span-4 
        bg-[url(/img/coffee4.png)] bg-cover bg-center
        "
      />

      <div className="col-span-1 row-span-29 flex justify-center items-center">
        <hr className="h-full w-2 pt-5 rounded-full bg-orange-900"></hr>
      </div>

      <div className="col-span-5 row-span-4  flex flex-col justify-top items-left">
        <div className="text-2xl">Strawberry Shortcake</div>
        <div className="mt-3">A bold, concentrated shot of our signature espresso, marked (macchiato) with a small, creamy dollop of steamed milk foam. This is a robust, quick sip designed to highlight the coffee's flavor</div>
      </div>
      <div 
        className="col-span-5 row-span-3 
        bg-[url(/img/cake.png)] bg-cover bg-bottom
        "
      />
      <div className="col-span-5 row-span-4  flex flex-col justify-center items-left">
        <div className="text-2xl">Chocolate Brownies</div>
        <div className="mt-3">A bold, concentrated shot of our signature espresso, marked (macchiato) with a small, creamy dollop of steamed milk foam. This is a robust, quick sip designed to highlight the coffee's flavor</div>
      </div>
      <div 
        className="col-span-5 row-span-4 
        bg-[url(/img/cake2.png)] bg-cover bg-center
        "
      />
      <div className="col-span-5 row-span-4  flex flex-col justify-center items-left">
        <div className="text-3xl">Waffles</div>
        <div className="mt-3">A bold, concentrated shot of our signature espresso, marked (macchiato) with a small, creamy dollop of steamed milk foam. This is a robust, quick sip designed to highlight the coffee's flavor</div>
      </div>
      <div 
        className="col-span-5 row-span-4
        bg-[url(/img/cake3.png)] bg-cover bg-center
        "
      />
    </div>
  )
}