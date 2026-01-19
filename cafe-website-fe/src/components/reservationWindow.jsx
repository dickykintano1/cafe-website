import { Link } from "react-router"

export default function ReservationWindow(){
  return(
    <div className=' flex h-[50svh] justify-center items-center'>
      <img src="/img/exterior.png" className="absolute h-[50svh] md:w-screen object-cover brightness-75"></img>
      <Link to="/reservation" className='text-4xl md:text-5xl absolute text-white text-center font-DMSerif underline '>Make a Reservation</Link>
    </div>
  )
}