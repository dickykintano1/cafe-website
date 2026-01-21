import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ReservationWindow from "../../components/reservationWindow";
import ScrollIndicator from "../../components/scrollIndicator";
import ResponsiveContainer from "../../components/responsiveContainer";
import PageTitle from "../../components/pageTitle";
import Paragraph from "../../components/paragraph";

export default function AboutView() {
  const sectionRef = useRef(null);

  return (
    <>
      <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 pb-30 text-black">
        <div ref={sectionRef} className="relative">
          <ScrollIndicator targetRef={sectionRef} />
          <ResponsiveContainer className={"-mt-[100svh] pr-[30%]"}>
            <PageTitle>About</PageTitle>
            <Paragraph>It began with a singular obsession: the perfect cup of black coffee. To me, coffee was never just a morning ritual; it was a pursuit of clarity, acidity, and origin. For years, the daily grind was a solitary act of precision—dialing in roasts and perfecting extraction methods to satisfy a personal palate that demanded nothing less than excellence. In the quiet of those early mornings, the foundation of our craft was laid in the steam and the scent of freshly ground beans.</Paragraph>
            <div className="mt-15"><img src="/img/coffeeTexture.png" className="h-45 md:h-100 w-full object-cover"></img></div>
            <Paragraph>However, the true transformation occurred when the craft met the community. As the founder began brewing for friends and fellow enthusiasts, a new realization took hold: the technical reward of a perfect brew pale in comparison to the joy of sharing it. The act of service turned a solitary passion into a collective experience. We discovered that coffee tastes better when it serves as a bridge between people, shifting our focus from the science of the bean to the soul of the guest.</Paragraph>
            <Paragraph>Today, this cafe is the realization of that shared joy. While our heart remains rooted in specialty black coffee, we have expanded our table to offer a complete sensory experience. From artisanal cakes and seasonal kitchen offerings to curated souvenirs that allow you to take a piece of our world home, every detail is handled with the same precision as our pour-overs. We no longer just brew for ourselves; we brew to create a space where quality and hospitality meet.</Paragraph>
          </ResponsiveContainer>
        </div>
      </section >
      <ReservationWindow />
    </>
  );
}