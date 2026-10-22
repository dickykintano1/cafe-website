import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import MenuButton from "./menuButton";

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const curr = window.scrollY;

      if (curr > lastScroll && curr > 50) {
        navRef.current.classList.add("-translate-y-100");
      } else {
        navRef.current.classList.remove("-translate-y-100");
      }

      lastScroll = curr;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MenuButton is light (white) while it is over an element marked with `data-menu-light`, dark otherwise
  useEffect(() => {
    const checkOverlap = () => {
      if (!menuButtonRef.current) return;
      const btn = menuButtonRef.current.getBoundingClientRect();
      const centerY = btn.top + btn.height / 2;

      const isOver = Array.from(document.querySelectorAll("[data-menu-light]")).some((el) => {
        const rect = el.getBoundingClientRect();
        return centerY >= rect.top && centerY <= rect.bottom;
      });

      setOverLight(isOver);
    };

    checkOverlap();
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap);

    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, [location.pathname]);

  return (
    <>
      <div ref={navRef}
        className="
        fixed top-0 z-97 w-[100svw] h-15 bg-transparent
        transition-all duration-300
        "
      >
      </div>
      <div ref={menuButtonRef} className="fixed top-0 px-4 mt-4 z-99 w-full flex flex-row gap-4 items-center justify-between">
        <MenuButton sideBarOpen={sideBarOpen} dark={!overLight} onClick={() => setSideBarOpen((o) => !o)} />
        <Link to="#" 
          className={`
            font-Tinos
            px-4 py-2 rounded-lg 
            bg-transparent border
            transition-colors duration-300
            ${overLight ? "text-white border-white hover:bg-white/20" : "text-black border-black hover:bg-black/20"}`
          }
        >
          Booking
        </Link>
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
            fixed left-0 top-0 h-screen w-[50svw] md:w-[40svw] lg:w-[25svw] bg-[#795548] shadow-xl z-98
            transform transition-transform duration-300
            ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="px-4 pb-4 flex flex-col w-full h-full justify-between">
            <div className="w-full flex flex-col flex-wrap">
              <p className="pt-2 mb-4 self-end md:self-center text-4xl font-bold font-DMSerif">Ardell's</p>

              <Link to="/" className="mt-4 text-2xl self-start">Home</Link>
              <Link to="/about" className="mt-4 text-2xl self-start">About</Link>
              <Link to="/accessories" className="mt-4 text-2xl self-start">Accessories</Link>
              <Link to="/reservation" className="mt-4 text-2xl self-start">Reserve</Link>

            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com" aria-label="Instagram">
                <img src="/img/Instagram_Glyph_White.png" className='w-8 h-8'></img>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="/img/Facebook_Logo_Secondary.png" className='w-8 h-8'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
