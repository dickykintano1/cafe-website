import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import ImagePhotoStyle from "../../components/imgPhotoStyle";

export default function CoffeeView() {
  const menuItems = [
    {
      id:"blackCoffee",
      animation:"fadeInRightDrop", 
      imgUrl:"/img/blackCoffee.png", 
      title:"Black Coffee", 
      description:"We brew our black coffee carefully to bring out the natural character of each bean, focusing on clarity, balance, and sweetness. It’s prepared simply and thoughtfully, inviting you to slow down and enjoy the cup as it is."
    },
    {
      id:"cappuccino",
      animation:"fadeInLeftDrop", 
      imgUrl:"/img/cappuccino.png", 
      title:"Cappuccino", 
      description:"Our cappuccino is made by balancing a well-extracted espresso with silky milk and a light layer of foam. It’s familiar and comforting, crafted with attention but meant to feel easy and approachable."
    },
    {
      id:"espresso",
      animation:"fadeInRightDrop", 
      imgUrl:"/img/espresso.png", 
      title:"Espresso", 
      description:"We pull our espresso with consistency and care, aiming for a cup that is rich, clean, and gently sweet rather than sharp. It’s a small drink made deliberately, whether you’re stopping in briefly or staying a while."
    },
  ];
      
  const sectionRef = useRef(null);

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] text-black pr-20 pb-30">
          <div className="mt-30 text-5xl font-bold font-DMSerif">Coffee</div>
          <div className="mt-15 text-3xl">Beans Selection</div>
          <div className="mt-5 text-base">
            <p>Colombia Washed — soft, balanced, sweet</p>
            <p>Brazil Natural — warm, nutty, comforting</p>
            <p>Ethiopia Natural — bright, expressive, fruity</p>
          </div>
          <div className="mt-15 text-sm italic">We stand behind these beans, no matter how you drink them.</div>
          <div className="mt-10 border-t border-1"></div>
          <MenuItem menuItems={menuItems}/>
        </div>
      </div>
    </section>
  );
}

function MenuItem({menuItems}){
  return(
    <>
      {menuItems.map(item => (
        <>
          <div className="mt-20 text-base">
            <ImagePhotoStyle imgUrl={item.imgUrl} animation={item.animation}/>
          </div>
          <div className="mt-20 text-3xl">{item.title}</div>
          <div className="mt-5 text-base">{item.description}</div>
          <div className="mt-15 border-t border-1"></div>
        </>
      ))}
      
    </>
  )
}