import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import ResponsiveContainer from "../../components/responsiveContainer"
import MenuItems from "../../components/menuItems";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import Paragraph from "../../components/paragraph";

export default function CoffeeMenu() {
  const menuItems = [
    {
      id: "blackCoffee",
      animation: "fadeInRightDrop",
      imgUrl: "/img/blackCoffee.png",
      title: "Black Coffee",
      ingredients: ["Specialty beans", "Hot water"],
      feel: ["Clear", "Balanced", "Naturally sweet"]
    },
    {
      id: "cappuccino",
      animation: "fadeInLeftDrop",
      imgUrl: "/img/cappuccino.png",
      title: "Cappuccino",
      ingredients: ["Espresso", "Steamed milk", "Milk foam"],
      feel: ["Silky", "Comforting", "Approachable"]
    },
    {
      id: "espresso",
      animation: "fadeInRightDrop",
      imgUrl: "/img/espresso.png",
      title: "Espresso",
      ingredients: ["Espresso shot"],
      feel: ["Rich", "Clean", "Gently sweet"],
      variant: "square"
    },
  ];

  const sectionRef = useRef(null);

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative ">
        {/* <ScrollIndicator targetRef={sectionRef} /> */}
        <div className="flex flex-col md:mx-[10%] lg:mx-[25%]">
          <PageTitle>Coffee</PageTitle>
          <div className='h-[2px] bg-brass/70 self-end w-[75%] mt-10' />

          <div className="mt-30 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 justify-center items-start">
            {menuItems.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <img src={item.imgUrl} className="w-full"></img>
                  <div className="text-base md:text-xl lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="flex flex-col gap-1 text-sm md:text-sm lg:text-base">
                    <div>
                      <ul className="flex flex-wrap">
                        {item.feel?.map((feel) => (
                          <li key={feel} className="text-black/70 italic after:content-['/'] after:mx-1.5 after:text-black/40 last:after:content-none">
                            {feel}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full bg-black/70 h-[2px]" />

                    <div>
                      <ul className="flex flex-wrap items-center">
                        {item.ingredients?.map((ingredient) => (
                          <li
                            key={ingredient}
                            className="text-black/70 after:content-['-'] after:mx-1.5 after:text-black/40 last:after:content-none"
                          >
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='h-[2px] bg-brass/70 w-[75%] mt-30' />

          <div className="mt-15 text-3xl md:text-4xl lg:text-5xl">Beans Selection</div>
          <Paragraph>
            <p>Colombia Washed — soft, balanced, sweet</p>
            <p>Brazil Natural — warm, nutty, comforting</p>
            <p>Ethiopia Natural — bright, expressive, fruity</p>
          </Paragraph>

          <div className="mt-5 text-sm md:text-sm lg:text-base italic">We stand behind these beans, no matter how you drink them.</div>
          <div className='h-[2px] bg-black/70 w-full mt-10' />

          {/* <MenuItems menuItems={menuItems} /> */}
        </div>
      </div>
      <BottomNavigation>Good beans, careful brewing, no shortcuts.</BottomNavigation>
    </section>
  );
}