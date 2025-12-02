import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 w-[100svw] h-[60px] bg-[#4E342E] text-white flex items-center">
      <button
        onClick={() => setOpen((o) => !o)}
        className="!bg-transparent "
      >
        <img src="/img/menu.png" className="w-8 h-8" alt="menu" />
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-[200] transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-screen w-[40vw] bg-[#795548] shadow-xl z-[300]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 ">
          <h2 className="text-xl font-bold">Sidebar Panel</h2>
          <p className="mt-4">Hey hey hey</p>
        </div>
      </div>
    </div>
  );
}
