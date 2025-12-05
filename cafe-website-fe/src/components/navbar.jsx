import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        fixed top-0 z-98 w-[100svw] h-[60px] 
        bg-[#FFE0B2] text-white 
        flex items-center
        transition-all duration-300
        "
      >
        <button
          onClick={() => setOpen((o) => !o)}
          className="!bg-transparent "
        >
          <img src="/img/menu.png" className="w-8 h-8" alt="menu" />
        </button>
      </div>

      <div>
        {/* Overlay */}
        <div
          className={`
            fixed inset-0 bg-black/50 transition-opacity duration-300 z-99
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            fixed left-0 top-0 h-screen w-[40vw] bg-[#795548] shadow-xl z-99
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="p-4 ">
            <h2 className="text-xl font-bold">Sidebar Panel</h2>
            <p className="mt-4">Reserve</p>
            
            <p className="mt-4">Location</p>

            <p className="mt-4">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
