import { Link } from "react-router"

export default function ReservationWindow() {
  return (
    <div className=' flex h-[50svh] justify-center items-center'>
      <img src="/img/exterior.png" className="absolute h-[50svh] w-screen object-cover brightness-75 sepia-[.2]"></img>
      <Link to="/reservation" className='text-4xl md:text-5xl absolute text-cream text-center font-DMSerif px-8 py-5 bg-espresso/60 backdrop-blur-sm border border-brass/60 hover:bg-espresso/80 transition-colors duration-300'>Make a Reservation</Link>
    </div>
  )
}