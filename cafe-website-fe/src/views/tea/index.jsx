import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ScrollIndicator from "../../components/scrollIndicator";
import ImagePhotoStyle from "../../components/imgPhotoStyle";

export default function TeaView(){
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

  return(
    <section className="bg-[#FFF8E1] w-[100vw] max-w-[100vw] px-5">
      <div ref={sectionRef} className="relative">
        <ScrollIndicator targetRef={sectionRef}/>
        <div className="-mt-[100svh] text-black pr-20 pb-30">
          <div className="pl-5 mt-30 text-5xl font-bold font-DMSerif">Tea</div>
          <div className="mt-5 text-sm italic">Loose-leaf, brewed to order.</div>
          <div className="mt-15 border-t border-1 -mr-10"></div>
          <div className="my-15">
            <ImagePhotoStyle imgUrl={"/img/tea.png"} animation={"fadeInRightDrop"}/>
          </div>
          {choices.map(item => {
            return (
              <div className="mt-3">
                <div className="text-3xl">{item.name}</div>
                <div className="text-base">{item.description}</div>
              </div>
            )
          })}
          <div className="mt-15 border-t border-1 -mr-20"></div>
          <div className="mt-30 text-sm italic text-center -mr-20">Attentive brewing, thoughtful simplicity.</div>
        </div>
      </div>
    </section>
  )
}