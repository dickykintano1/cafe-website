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
      <section className="bg-[#FFF8E1] text-black pb-15 block md:hidden">
        <div className="relative flex flex-col gap-30 mx-5 max-w-full mr-[10svw]">
          <div className="ml-[20svw]">
            <PageTitle>About</PageTitle>
          </div>

          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={`
                flex flex-row items-start md:gap-20 
                ${index % 2 === 1 ? 'flex-row-reverse' : ''} 
                ${index === (paragraphs.length - 1) ? 'mb-15' : ''}
              `}
            >
              <div className={`
                ${index % 2 === 1 ? 'mr-[20svw]' : 'ml-[20svw]'}
                text-justify text-2xl flex-1
              `}>
                {paragraph}
              </div>
              <div className={`
                flex flex-1 w-full
                ${index % 2 === 1 ? 'items-end justify-end' : ''}
              `}>
                <img
                  src={images[index]}
                  className={`
                    ${index % 2 === 1 ? 'ml-[20svw]' : 'mr-[20svw]'}
                    h-100 min-w-0 w-full object-cover hover:m-0 transition-all duration-700
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FFF8E1] text-black pb-15 hidden md:block">
        <div className="relative flex flex-col gap-30 mx-5 max-w-full mr-[10svw]">
          <div className="ml-[20svw]">
            <PageTitle>About</PageTitle>
          </div>

          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={`
                flex flex-row items-start md:gap-20 
                ${index % 2 === 1 ? 'flex-row-reverse' : ''} 
                ${index === (paragraphs.length - 1) ? 'mb-15' : ''}
              `}
            >
              <div className={`
                ${index % 2 === 1 ? 'mr-[20svw]' : 'ml-[20svw]'}
                text-justify text-2xl flex-1
              `}>
                {paragraph}
              </div>
              <div className={`
                flex flex-1 w-full
                ${index % 2 === 1 ? 'items-end justify-end' : ''}
              `}>
                <img
                  src={images[index]}
                  className={`
                    ${index % 2 === 1 ? 'ml-[20svw]' : 'mr-[20svw]'}
                    h-100 min-w-0 w-full object-cover hover:m-0 transition-all duration-700
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReservationWindow />
    </>
  );
}