import PageTitle from "../../components/pageTitle"
import Paragraph from "../../components/paragraph"

export default function ReservationView(){
  return(
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] pt-15 px-5 md:pl-50">
      <div className="text-black pr-15 pb-30 md:mr-[50%] lg:mr-[50%]">
        <PageTitle>Reservation</PageTitle>
        <Paragraph>
          Reservations available for groups of 4+ <br/>
          <br/>
          Walk-ins always welcome. <br/>
          For reservations, contact us on WhatsApp:        
        </Paragraph>
        <div className="mt-15 text-4xl md:text-4xl lg:text-5xl">(555) 123-4567</div>
        <Paragraph>
          <p className="font-bold">Opening Hours:</p>
          <p>Mon - Fri: 07:00 - 20:00</p>
          <p>Saturday: 08:00 - 20:00</p>
          <p>Sunday: 08:00 - 15:00</p>
        </Paragraph>
        <Paragraph>
          123 Pine Street, Prosperity Alley, Anytown, CA 90210
        </Paragraph>
      </div>
    </section>
  )
}