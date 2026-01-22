import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import MenuItems from "../../components/menuItems";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import ResponsiveContainer from "../../components/responsiveContainer";

export default function PastryView() {
  const sectionRef = useRef(null);

  const menuItems = [
    {
      id: "butterCroisant",
      animation: "fadeInRightDrop",
      imgUrl: "/img/butterCroissant.png",
      title: "Butter Croissant",
      description: "Flaky, golden layers made with rich butter and baked until crisp. Light inside, deeply aromatic, and satisfying in every bite."
    },
    {
      id: "financier",
      animation: "fadeInLeftDrop",
      imgUrl: "/img/financier.png",
      title: "Financier",
      description: "A moist almond cake with a delicate, nutty sweetness. Soft, buttery, and perfect alongside a cup of coffee."
    },
    {
      id: "canele",
      animation: "fadeInRightDrop",
      imgUrl: "/img/canele.png",
      title: "Canelé de Bordeaux",
      description: "A caramelized, dark crust with a soft, custardy center. Deeply aromatic with notes of vanilla and rum.",
      variant: "square"
    },
    {
      id: "scone",
      animation: "fadeInRightDrop",
      imgUrl: "/img/scone.png",
      title: "Scone",
      description: "Light and crumbly with a tender interior and lightly crisp edges. Enjoy it on its own or paired with jam and cream.",
    },
  ];

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef} />
        <ResponsiveContainer className="-mt-[100svh]">
          <PageTitle>Pastry</PageTitle>
          <div className="mt-15 border-t border-1"></div>
          <MenuItems menuItems={menuItems} />
        </ResponsiveContainer>
      </div>
      <BottomNavigation leftButton={"coffee"} rightButton={"tea"}>Focused on technique, balance, and time.</BottomNavigation>
    </section>
  )
}