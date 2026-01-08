export default function ReservationView(){
  return(
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] pt-15 px-5">
      <div className="text-black pr-15 pb-30">
        <div className="mt-15 text-5xl font-bold font-DMSerif">Reservation</div>
        <div className="mt-15 text-xl">
          Reservations available for groups of 4+ <br/>
          <br/>
          Walk-ins always welcome. <br/>
          For reservations, contact us on WhatsApp:        
        </div>
        <div className="mt-15 text-4xl">(555) 123-4567</div>
        <div className="mt-15 text-xl">
          <p className="font-bold">Opening Hours:</p>
          <p>Mon - Fri: 07:00 - 20:00</p>
          <p>Saturday: 08:00 - 20:00</p>
          <p>Sunday: 08:00 - 15:00</p>
        </div>
        <div className="mt-10 text-xl">
          123 Pine Street, Prosperity Alley, Anytown, CA 90210
        </div>
      </div>
    </section>
  )
}