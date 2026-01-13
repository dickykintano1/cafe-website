import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#4a372d] text-[#cccccc] pt-15 px-6 max-h-[50svh]">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section: Navigation and Reserve */}
        <div className="border-t border-[#d4b996] py-6 flex justify-between items-start text-2xl">
          <ul className="space-y-2">
            <li><a href="/" className="hover:opacity-70 transition-opacity">Home</a></li>
            <li><a href="/about" className="hover:opacity-70 transition-opacity">About</a></li>
            <li><a href="/accessories" className="hover:opacity-70 transition-opacity">Accessories</a></li>
          </ul>
          <div className="text-right flex flex-col gap-2">
            <a href="/reservation" className="md:text-2xl hover:opacity-70 transition-opacity">
              Reserve
            </a>
            <div className='h-8'></div>
            {/* Social Icons positioned under Reserve to match your layout */}
            <div className="flex h-full justify-end items-bottom gap-4">
              <a href="https://instagram.com" aria-label="Instagram">
                <img src="/img/Instagram_Glyph_White.png" className='w-8 h-8'></img>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="/img/Facebook_Logo_Secondary.png" className='w-8 h-8'></img>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Visit Us and Contact */}
        <div className="border-t border-[#d4b996] py-8 flex flex-col justify-between items-start gap-6 text-base">
          <p className="text-3xl font-bold">VISIT US</p>
          <div className='w-full flex justify-between items-start'>
            <div>
              <p>
                123 Pine Street, Prosperity<br />
                Alley, Anytown, CA 90210
              </p>
            </div>
            

            <div className="text-right">
              <p className="opacity-90">(555) 123-4567</p>
              <a href="mailto:ardell@hello.com" className="hover:underline">
                ardell@hello.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-[#d4b996] h-15 flex items-center">
          <p className="text-sm opacity-80">
            © {currentYear} Ardell's Coffee & Pastry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;