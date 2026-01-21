import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";
import SwiperCarousel from "../../components/swiper";
import BottomNavigation from "../../components/bottomNavigator";
import ResponsiveContainer from "../../components/responsiveContainer";
import PageTitle from "../../components/pageTitle";

export default function AccessoriesView() {
  const sectionRef = useRef(null);

  const items = [
    {
      imgUrl: "/img/keychainCoffee.png",
      title: "Coffee Art Keychain",
      description: "Hand made, premium leather.",
      price: "$5.99"
    },
    {
      imgUrl: "/img/keychainCup.png",
      title: "Cup Keychain",
      description: "Stainless steel and leather material.",
      price: "$4.49"
    },
    {
      imgUrl: "/img/coaster.png",
      title: "Ardelle's Coaster",
      description: "Leather made coaster, mostly for warm and hot drinks. Available in several colors.",
      price: "$4.49"
    },
  ];

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef} />
        <ResponsiveContainer className="-mt-[100svh]">
          <PageTitle>Accessories</PageTitle>
          <div className="pl-5 mt-5 text-sm md:text-base lg:text-lg italic">Available exclusively in-store.</div>
          <div className='mt-15 w-full'>
            <SwiperCarousel effect="fade" className='h-[25svh] lg:h-[40svh] w-full'
              images={["/img/keychainCoffee.png", "/img/keychainCup.png", "/img/coaster.png"]}
            />
          </div>
          <div className="mt-15 border-t border-1 mb-25"></div>
          <ItemList />
          {/* {items.map(item => {
            return (
              <>
                <div className="text-3xl">{item.title}</div>
                <div className="text-base mb-5">{item.description}</div>
                <img src={item.imgUrl} className="w-fit"></img>
                <div className="text-3xl mb-25 text-right">{item.price}</div>
              </>
            )
          })} */}
          {/* <div className="mt-15 border-t border-1 -mr-15"></div> */}
        </ResponsiveContainer>
      </div>
      <BottomNavigation leftButton={"pasta"}>
        <div className="mt-30 text-base md:text-lg md:text-xl">
          Why in-store only?
          <br /><br />
          We want every visit at Ardell’s to be memorable in the best way, and hope that these accessories can carry them with and for you.
        </div>
      </BottomNavigation>
    </section>
  )
}

function ItemList() {
  const items = [
    {
      imgUrl: "/img/keychainCoffee.png",
      title: "Coffee Art Keychain",
      description: "Hand made, premium leather.",
      price: "$5.99"
    },
    {
      imgUrl: "/img/keychainCup.png",
      title: "Cup Keychain",
      description: "Stainless steel and leather material.",
      price: "$4.49"
    },
    {
      imgUrl: "/img/coaster.png",
      title: "Ardelle's Coaster",
      description: "Leather made coaster, mostly for warm and hot drinks. Available in several colors.",
      price: "$4.49"
    },
  ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index} className="mb-25">
            <div className="md:grid md:grid-cols-2 md:gap-x-10">
              <div className="order-2">
                <div className="text-3xl md:text-4xl lg:text-5xl">{item.title}</div>
                <div className="text-base md:text-lg lg:text-xl mb-5">{item.description}</div>
                <div className="hidden text-3xl md:text-4xl lg:text-5xl text-left md:block">{item.price}</div>
              </div>
              <img src={item.imgUrl} className="w-full max-h-[300px] md:max-h-[500px] object-cover order-1" alt={item.title}></img>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-right md:hidden">{item.price}</div>
          </div>
        )
      })}
    </>
  )


}