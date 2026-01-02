import React from 'react';

const VisitUs = () => {
  return (
    <section className="bg-[#FDF1D3] py-20 px-6 text-center text-[#5C3D2E]">
      {/* Title */}
      <h2 className="text-6xl md:text-7xl mb-10 italic  font-DMSerif">
        Visit us
      </h2>

      {/* Map Container */}
      <div className="max-w-4xl mx-auto mb-12 shadow-sm">
        {/* Replace the 'src' with your actual Google Maps Embed link */}
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=..." 
          className="w-full h-[300px] md:h-[450px] rounded-sm border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Address Section */}
      <div className="mb-16">
        <p className="text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
          123 Pine Street, Prosperity Alley,<br />
          Anytown, CA 90210
        </p>
      </div>

      {/* Hours Section */}
      <div className="space-y-8 text-lg md:text-xl">
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Monday - Friday</h3>
          <p className="font-semibold">07:00 - 20:00</p>
        </div>
        
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Saturday</h3>
          <p className="font-semibold">08:00 - 20:00</p>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-sm mb-1 opacity-80">Sunday</h3>
          <p className="font-semibold">08:00 - 15:00</p>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;