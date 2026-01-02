import { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
import MenuButton from "./menuButton";

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const curr = window.scrollY;

      if (curr > lastScroll && curr > 50) {
        navRef.current.classList.add("-translate-y-100");
        console.log('nav hidden')
      } else {
        navRef.current.classList.remove("-translate-y-100");
        console.log('nav show')
      }

      lastScroll = curr;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={navRef}
        className="
        fixed top-0 z-97 w-[100svw] h-15 bg-[#FFE0B2]
        transition-all duration-300
        "
      >
      </div>
      <div className="fixed top-0 ml-4 mt-4 z-99">
        <MenuButton sideBarOpen={sideBarOpen} onClick={() => setSideBarOpen((o) => !o)}/>
      </div>

      <div>
        {/* Overlay */}
        <div
          className={`
            fixed inset-0 bg-black/50 transition-opacity duration-300 z-98
            ${sideBarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setSideBarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            fixed left-0 top-0 h-screen max-w-[50svw] bg-[#795548] shadow-xl z-98
            transform transition-transform duration-300
            ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="pl-4 flex flex-col justify-center items-center">
            <p className="pt-2 ml-24 mb-4 w-full text-4xl font-bold font-DMSerif">Ardell's</p>
            
            <Link to="/" className="mt-4 text-2xl self-start">Home</Link>
            <p className="mt-4 text-2xl self-start">Reserve</p>
            <p className="mt-4 text-2xl self-start">Location</p>
            <p className="mt-4 text-2xl self-start">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
