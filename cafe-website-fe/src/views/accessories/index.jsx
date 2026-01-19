import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";
import SwiperCarousel from "../../components/swiper";
import BottomNavigation from "../../components/bottomNavigator";

export default function AccessoriesView(){
  const sectionRef = useRef(null);

  const items = [
    {
      imgUrl:"/img/keychainCoffee.png", 
      title:"Coffee Art Keychain", 
      description:"Hand made, premium leather.",
      price: "$5.99"
    },
    {
      imgUrl:"/img/keychainCup.png", 
      title:"Cup Keychain", 
      description:"Stainless steel and leather material.",
      price: "$4.49"
    },
    {
      imgUrl:"/img/coaster.png", 
      title:"Ardelle's Coaster", 
      description:"Leather made coaster, mostly for warm and hot drinks. Available in several colors.",
      price: "$4.49"
    },
  ];

  return(
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] text-black pr-15">
          <div className="pl-5 mt-30 text-5xl font-bold font-DMSerif">Accessories</div>
          <div className="pl-5 mt-5 text-sm italic">Available exclusively in-store.</div>
          <div className='mt-15 w-full'>
            <SwiperCarousel effect="fade" className='h-[25svh] w-full'
              images={["/img/keychainCoffee.png", "/img/keychainCup.png", "/img/coaster.png"]}
            />
          </div>
          <div className="mt-15 border-t border-1 mb-25"></div>
          {items.map(item => {
            return(
              <>
                <div className="text-3xl">{item.title}</div>
                <div className="text-base mb-5">{item.description}</div>
                <img src={item.imgUrl} className="w-fit"></img>
                <div className="text-3xl mb-25 text-right">{item.price}</div>
              </>
            )
          })}
          <div className="mt-15 border-t border-1 -mr-15"></div>
          <div className="mt-30 text-base">
            Why in-store only?
            <br/><br/>
            We want every visit at Ardell’s to be memorable in the best way, and hope that these accessories can carry them with and for you.
          </div>
        </div>
      </div>
      <BottomNavigation leftButton={"pasta"}/>
    </section>
  )
}