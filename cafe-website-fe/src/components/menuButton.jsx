import React, { useState, useEffect } from 'react';

export default function MenuButton({ sideBarOpen, scrolled, onClick }) {
  // Define common styles for the three lines
  const lineStyle = `${"h-1 w-8 my-0.5 rounded-full transition-all duration-300 ease-in-out"} ${scrolled ? "bg-black" : "bg-white"}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center"
      aria-label="Toggle Menu"
    >
      {/* Top Line */}
      <div className={`${lineStyle} ${sideBarOpen ? "rotate-45 translate-y-2" : ""}`} />

      {/* Middle Line */}
      <div className={`${lineStyle} ${sideBarOpen ? "opacity-0" : "opacity-100"}`} />

      {/* Bottom Line */}
      <div className={`${lineStyle} ${sideBarOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
};
