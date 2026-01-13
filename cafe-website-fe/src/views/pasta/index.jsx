import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";

export default function PastaView(){
  const sectionRef = useRef(null);

  const menuItems1 = [
    {
      id:"tomatoBasilSauce",
      animation:"fadeInRightDrop", 
      imgUrl:"/img/tomatoBasilSauce.png", 
      title:"Tomato Basil Sauce", 
      description:"A simple tomato sauce gently simmered to bring out natural sweetness, finished with fresh basil for balance and clarity. It’s familiar and comforting, made to feel light rather than heavy."
    },
    {
      id:"aglio",
      animation:"fadeInLeftDrop", 
      imgUrl:"/img/aglio.png", 
      title:"Aglio e Olio", 
      description:"Olive oil is warmed slowly with garlic and a touch of chili to create a clean, aromatic sauce that coats the pasta evenly. Restrained and straightforward, it lets texture and timing do the work."
    },
    {
      id:"pesto",
      animation:"fadeInRightDrop", 
      imgUrl:"/img/pestoSauce.png", 
      title:"Pesto Sauce", 
      description:"Fresh herbs, olive oil, and nuts are blended into a sauce that’s vibrant without being sharp. It’s rich in aroma but easy to enjoy, offering freshness in every bite.",
      variant:"square"
    }
  ];

  const menuItems2 = [
    {
      id:"mushroomCreamSauce",
      animation:"fadeInRightDrop", 
      imgUrl:"/img/mushroomCreamSauce.png", 
      title:"Mushroom Cream Sauce", 
      description:"Earthy mushrooms are cooked gently to deepen their flavor, then folded into a light cream sauce for a smooth, savory finish. It’s rich but measured, designed to feel comforting without weighing the dish down."
    },
    {
      id:"tomatoCreamSauce",
      animation:"fadeInLeftDrop", 
      imgUrl:"/img/tomatoCreamSauce.png", 
      title:"Tomato Cream Sauce", 
      description:"A touch of cream softens a bright tomato base, creating a sauce that’s mellow and rounded. Familiar and easygoing, it brings warmth and balance to every bite."
    },
  ];

  return(
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] text-black pr-20 pb-30">
          <div className="pl-5 mt-30 text-5xl font-bold font-DMSerif">Pasta</div>
          <div className="mt-15 border-t border-1 -mr-10"></div>
          <div className="mt-15 text-4xl font-bold font-DMSerif">Spaghetti</div>
          <MenuItems menuItems={menuItems1}/>
          <div className="mt-15 text-4xl font-bold font-DMSerif">Penne</div>
          <MenuItems menuItems={menuItems2}/>
          <div className="mt-15 border-t border-1 -mr-20"></div>
          <div className="mt-30 text-sm italic text-center -mr-20">Quality pasta meets rich spices.</div>
        </div>
      </div>
    </section>
  )
}