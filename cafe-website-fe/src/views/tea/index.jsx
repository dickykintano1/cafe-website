import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import ImagePhotoStyle from "../../components/imgPhotoStyle";
import BottomNavigation from "../../components/bottomNavigator";
import PageTitle from "../../components/pageTitle";
import ResponsiveContainer from "../../components/responsiveContainer";

export default function TeaView() {
  const sectionRef = useRef(null);

  const choices = [
    {
      id: "blackTea",
      name: "Black Tea",
      description: "Bold · Smooth · Comforting"
    },
    {
      id: "greenTea",
      name: "Green Tea",
      description: "Fresh · Gentle · Clean"
    },
    {
      id: "chamomile",
      name: "Chamomile",
      description: "Soft · Floral · Calming"
    },
    {
      id: "mint",
      name: "Mint",
      description: "Bright · Cooling · Refreshing"
    },
  ]

  return (
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5 text-black">
      <div ref={sectionRef} className="relative">
        {/* <ScrollIndicator targetRef={sectionRef}/> */}
        <ResponsiveContainer>
          <PageTitle>Tea</PageTitle>
          <div className="mt-5 text-sm md:text-base lg:text-lg italic italic">Loose-leaf, brewed to order.</div>
          <div className="mt-15 border-t border-1"></div>

          <div className="lg:grid lg:grid-cols-2">
            <div className="my-15">
              <ImagePhotoStyle imgUrl={"/img/tea.png"} animation={"fadeInRightDrop"} />
            </div>
            <div className="lg:pt-10">
              {choices.map(item => {
                return (
                  <div className="mt-3">
                    <div className="text-3xl md:text-4xl lg:text-5xl">{item.name}</div>
                    <div className="text-base md:text-lg lg:text-xl">{item.description}</div>
                  </div>
                )
              })}
            </div>

          </div>

        </ResponsiveContainer>
      </div>
      <BottomNavigation leftButton={"pastry"} rightButton={"pasta"}>Attentive brewing, thoughtful simplicity.</BottomNavigation>
    </section>
  )
}