import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import Paragraph from "../../components/paragraph";

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
      description:"We pull our espresso with consistency and care, aiming for a cup that is rich, clean, and gently sweet rather than sharp. It’s a small drink made deliberately, whether you’re stopping in briefly or staying a while.",
      variant:"square"
    },
  ];
      
  const sectionRef = useRef(null);

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative ">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] pr-20 md:pl-50 md:pr-50 lg:mr-[50%]">
          <PageTitle>Coffee</PageTitle>
          <div className="mt-15 text-3xl md:text-4xl lg:text-5xl">Beans Selection</div>
          <Paragraph>
            <p>Colombia Washed — soft, balanced, sweet</p>
            <p>Brazil Natural — warm, nutty, comforting</p>
            <p>Ethiopia Natural — bright, expressive, fruity</p>
          </Paragraph>
          <div className="mt-15 text-sm md:text-sm lg:text-base italic">We stand behind these beans, no matter how you drink them.</div>
          <div className="mt-10 border-t border-1"></div>
          <MenuItems menuItems={menuItems}/>
        </div>
      </div>
      <BottomNavigation rightButton={"pastry"}>Good beans, careful brewing, no shortcuts.</BottomNavigation>
    </section>
  );
}