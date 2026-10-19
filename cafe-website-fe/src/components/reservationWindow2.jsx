import { Link } from "react-router"

export default function ReservationWindow2() {
  return (
    <div className="relative flex flex-col bg-[#F4EDE2] w-full justify-center items-center overflow-hidden">
      <Link
        to="/reservation"
        className="relative z-10 text-3xl md:text-5xl text-white text-center font-DMSerif underline bg-[#A85A38] px-8 py-5 md:px-12 md:py-6 rounded-xl mt-32 md:mt-44 shadow-lg hover:bg-[#8C472A] transition-colors"
      >
        Make a Reservation
      </Link>

      <div className="relative w-full h-52 md:h-72 lg:h-80 flex items-end justify-center pointer-events-none select-none">
        {/* Left: Latte Art */}
        <img
          src="/img/latteArt.png"
          alt="Latte Art"
          className="absolute left-[2%] md:left-[8%] lg:left-[12%] bottom-2 md:bottom-4 h-44 md:h-64 lg:h-72 w-auto object-contain rotate-90"
        />

        {/* Center: Coffee Beans */}
        <img
          src="/img/coffeeBeans.png"
          alt="Coffee Beans"
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-12 h-36 md:h-56 lg:h-64 w-auto object-contain"
        />

        {/* Right: Ground Coffee */}
        <img
          src="/img/groundCoffee.png"
          alt="Ground Coffee"
          className="absolute right-[2%] md:right-[2%] lg:right-[5%] bottom-2 md:bottom-4 h-48 md:h-68 lg:h-76 w-auto object-contain rotate-90 -scale-y-100"
        />
      </div>
    </div>
  )
}
