import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ReservationWindow from "../../components/reservationWindow";
import ScrollIndicator from "../../components/scrollIndicator";
import ResponsiveContainer from "../../components/responsiveContainer";
import PageTitle from "../../components/pageTitle";
import Paragraph from "../../components/paragraph";

export default function AboutView() {
  const sectionRef = useRef(null);
  const paragraphs = [
    "It began with a singular obsession: the perfect cup of black coffee. To me, coffee was never just a morning ritual; it was a pursuit of clarity, acidity, and origin. For years, the daily grind was a solitary act of precision—dialing in roasts and perfecting extraction methods to satisfy a personal palate that demanded nothing less than excellence. In the quiet of those early mornings, the foundation of our craft was laid in the steam and the scent of freshly ground beans.",
    "However, the true transformation occurred when the craft met the community. As the founder began brewing for friends and fellow enthusiasts, a new realization took hold: the technical reward of a perfect brew pale in comparison to the joy of sharing it. The act of service turned a solitary passion into a collective experience. We discovered that coffee tastes better when it serves as a bridge between people, shifting our focus from the science of the bean to the soul of the guest.",
    "Today, this cafe is the realization of that shared joy. While our heart remains rooted in specialty black coffee, we have expanded our table to offer a complete sensory experience. From artisanal cakes and seasonal kitchen offerings to curated souvenirs that allow you to take a piece of our world home, every detail is handled with the same precision as our pour-overs. We no longer just brew for ourselves; we brew to create a space where quality and hospitality meet."
  ];
  const images = [
    "/img/coffeeTexture.png",
    "/img/coffeeTexture.png",
    "/img/coffeeTexture.png"
  ]

  return (
    <>
      {/* <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 pb-30 text-black">
        <div ref={sectionRef} className="relative">
          <ResponsiveContainer className={"lg:max-w-[25svw]"}>
            <PageTitle>About</PageTitle>
            <Paragraph>It began with a singular obsession: the perfect cup of black coffee. To me, coffee was never just a morning ritual; it was a pursuit of clarity, acidity, and origin. For years, the daily grind was a solitary act of precision—dialing in roasts and perfecting extraction methods to satisfy a personal palate that demanded nothing less than excellence. In the quiet of those early mornings, the foundation of our craft was laid in the steam and the scent of freshly ground beans.</Paragraph>
            <div className="mt-15"><img src="/img/coffeeTexture.png" className="h-45 md:h-100 w-full object-cover"></img></div>
            <Paragraph>However, the true transformation occurred when the craft met the community. As the founder began brewing for friends and fellow enthusiasts, a new realization took hold: the technical reward of a perfect brew pale in comparison to the joy of sharing it. The act of service turned a solitary passion into a collective experience. We discovered that coffee tastes better when it serves as a bridge between people, shifting our focus from the science of the bean to the soul of the guest.</Paragraph>
            <Paragraph>Today, this cafe is the realization of that shared joy. While our heart remains rooted in specialty black coffee, we have expanded our table to offer a complete sensory experience. From artisanal cakes and seasonal kitchen offerings to curated souvenirs that allow you to take a piece of our world home, every detail is handled with the same precision as our pour-overs. We no longer just brew for ourselves; we brew to create a space where quality and hospitality meet.</Paragraph>
          </ResponsiveContainer>
        </div>
      </section > */}

      <section className="bg-[#FFF8E1] text-black pb-15">
        <div className="relative flex flex-col gap-15 mx-5 w-full md:max-w-6xl md:mx-auto">
          <PageTitle>About</PageTitle>

          {paragraphs.map((paragraph, index) => (
            <div key={index} className={`flex flex-row items-start w-[75%] gap-10 md:gap-20 ${index % 2 === 1 ? 'flex-row-reverse' : ''} ${index === (paragraphs.length - 1) ? 'mb-15' : ''}`}>
              <div className="text-base md:text-xl lg:text-2xl flex-2">
                {paragraph}
              </div>
              <img 
                src={images[index]} 
                className="h-45 md:h-100 min-w-0 object-cover flex-1 hover:aspect-square transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>
      <ReservationWindow />
    </>
  );
}