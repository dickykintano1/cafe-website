import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import ResponsiveContainer from "../../components/responsiveContainer";

export default function PastaMenu() {
  const sectionRef = useRef(null);

  const menuItems1 = [
    {
      id: "tomatoBasilSauce",
      animation: "fadeInRightDrop",
      imgUrl: "/img/tomatoBasilSauce.png",
      title: "Tomato Basil Sauce",
      description: "A simple tomato sauce gently simmered to bring out natural sweetness, finished with fresh basil for balance and clarity. It’s familiar and comforting, made to feel light rather than heavy."
    },
    {
      id: "aglio",
      animation: "fadeInLeftDrop",
      imgUrl: "/img/aglio.png",
      title: "Aglio e Olio",
      description: "Olive oil is warmed slowly with garlic and a touch of chili to create a clean, aromatic sauce that coats the pasta evenly. Restrained and straightforward, it lets texture and timing do the work."
    },
    {
      id: "pesto",
      animation: "fadeInRightDrop",
      imgUrl: "/img/pestoSauce.png",
      title: "Pesto Sauce",
      description: "Fresh herbs, olive oil, and nuts are blended into a sauce that’s vibrant without being sharp. It’s rich in aroma but easy to enjoy, offering freshness in every bite.",
      variant: "square"
    }
  ];

  const menuItems2 = [
    {
      id: "mushroomCreamSauce",
      animation: "fadeInRightDrop",
      imgUrl: "/img/mushroomCreamSauce.png",
      title: "Mushroom Cream Sauce",
      description: "Earthy mushrooms are cooked gently to deepen their flavor, then folded into a light cream sauce for a smooth, savory finish. It’s rich but measured, designed to feel comforting without weighing the dish down."
    },
    {
      id: "tomatoCreamSauce",
      animation: "fadeInLeftDrop",
      imgUrl: "/img/tomatoCreamSauce.png",
      title: "Tomato Cream Sauce",
      description: "A touch of cream softens a bright tomato base, creating a sauce that’s mellow and rounded. Familiar and easygoing, it brings warmth and balance to every bite."
    },
  ];

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef} />
        <ResponsiveContainer className="-mt-[100svh]">
          <PageTitle>Pasta</PageTitle>
          <div className="mt-15 border-t border-1"></div>
          <div className="flex flex-col">
            <div className="mt-15 text-4xl md:text-5xl lg:text-6xl font-bold font-DMSerif">Spaghetti</div>
            <MenuItems menuItems={menuItems1} />
          </div>
          <div className="flex flex-col">
            <div className="my-15 border-t border-1" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-DMSerif">Penne</div>
            <MenuItems menuItems={menuItems2} />
          </div>
        </ResponsiveContainer>
      </div>
      <BottomNavigation leftButton={"tea"} rightButton={"accessories"}>Quality pasta meets rich spices.</BottomNavigation>
    </section>
  )
}