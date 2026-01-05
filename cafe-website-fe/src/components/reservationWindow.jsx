import { Link } from "react-router"

export default function ReservationWindow(){
  return(
    <div className=' flex h-[100svw] justify-center items-center'>
      <img src="/img/exterior.png" className="absolute brightness-75"></img>
      <Link to="/reservation" className='text-4xl absolute text-white text-center font-DMSerif underline '>Make a Reservation</Link>
    </div>
  )
}