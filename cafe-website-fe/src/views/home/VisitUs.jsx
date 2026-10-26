import useFadeInOnView from "../../hooks/useFadeInOnView";

const ADDRESS = {
  lines: ["123 Pine Street, Prosperity Alley", "Anytown, CA 90210"],
  // Used for the "Get directions" link
  query: "123 Pine Street, Prosperity Alley, Anytown, CA 90210",
};

// days: JS day indexes (0 = Sunday ... 6 = Saturday)
const HOURS = [
  { label: "Monday – Friday", days: [1, 2, 3, 4, 5], open: "07:00", close: "20:00" },
  { label: "Saturday", days: [6], open: "08:00", close: "20:00" },
  { label: "Sunday", days: [0], open: "08:00", close: "15:00" },
];

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function getStatus(now = new Date()) {
  const today = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const row = HOURS.find((h) => h.days.includes(today));
  const isOpen =
    !!row && minutes >= toMinutes(row.open) && minutes < toMinutes(row.close);
  const opensLaterToday = !!row && minutes < toMinutes(row.open);
  return { today, isOpen, row, opensLaterToday };
}

export default function VisitUs() {
  const polaroidRef = useFadeInOnView({ animation: "fadeInRight" });
  const noteRef = useFadeInOnView({ animation: "fadeInLeft" });
  const { today, isOpen, row, opensLaterToday } = getStatus();

  return (
    <section className="bg-[#FDF1D3] py-20 px-5 md:px-[10%] text-center text-[#5C3D2E] overflow-hidden">
      {/* Title */}
      <h2 className="text-6xl md:text-7xl mb-14 italic font-DMSerif">
        Visit us
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-14 md:gap-10 lg:gap-16">
        {/* ── Polaroid map ───────────────────────────── */}
        <div ref={polaroidRef} className="w-4/5 max-w-[380px]">
          <figure className="relative bg-white p-3 pb-16 shadow-[0_10px_25px_-5px_rgba(92,61,46,0.35)] -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
            {/* Tape */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#F3E2B3]/80 rotate-2 shadow-sm" />

            <div className="aspect-square w-full overflow-hidden bg-slate-200">
              {/* Replace the 'src' with your actual Google Maps Embed link */}
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=..."
                className="w-full h-full border-none sepia-[.35] saturate-[.85]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Handwritten-style caption */}
            <figcaption className="absolute bottom-4 left-0 right-0 font-DMSerif italic text-2xl text-[#5C3D2E]/90">
              Find us here ☕
            </figcaption>
          </figure>
        </div>

        {/* ── Pinned note: address + hours ───────────── */}
        <div ref={noteRef} className="w-11/12 max-w-[420px] md:mt-10">
          <div className="relative bg-[#FFFBF0] px-8 pt-10 pb-8 text-left shadow-[0_10px_25px_-5px_rgba(92,61,46,0.3)] rotate-2 transition-transform duration-500 hover:rotate-0">
            {/* Tape corners */}
            <span className="absolute -top-3 -left-4 w-20 h-6 bg-[#F3E2B3]/80 -rotate-[30deg] shadow-sm" />
            <span className="absolute -top-3 -right-4 w-20 h-6 bg-[#F3E2B3]/80 rotate-[30deg] shadow-sm" />

            {/* Address */}
            <h3 className="uppercase tracking-[0.25em] text-xs opacity-70 mb-2">
              Address
            </h3>
            <address className="not-italic font-DMSerif text-xl md:text-2xl leading-snug">
              {ADDRESS.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS.query)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-sm italic underline underline-offset-4 decoration-[#5C3D2E]/40 hover:decoration-[#5C3D2E] transition-colors"
            >
              Get directions →
            </a>

            {/* Divider */}
            <div className="my-7 border-t border-dashed border-[#5C3D2E]/30" />

            {/* Hours */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="uppercase tracking-[0.25em] text-xs opacity-70">
                Opening hours
              </h3>
              <span
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  isOpen ? "bg-[#5C3D2E] text-[#FDF1D3]" : "bg-[#5C3D2E]/10"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-400 animate-pulse" : "bg-[#5C3D2E]/50"}`} />
                {isOpen ? "Open now" : "Closed"}
              </span>
            </div>

            <ul className="space-y-3">
              {HOURS.map((h) => {
                const isToday = h.days.includes(today);
                return (
                  <li
                    key={h.label}
                    className={`flex items-baseline gap-3 -mx-3 px-3 py-1 rounded-sm transition-colors ${
                      isToday ? "bg-[#FDF1D3] font-semibold" : ""
                    }`}
                  >
                    <span className="text-base md:text-lg whitespace-nowrap">{h.label}</span>
                    {/* Dotted leader */}
                    <span className="flex-1 border-b-2 border-dotted border-[#5C3D2E]/25 translate-y-[-4px]" />
                    <span className="text-base md:text-lg tabular-nums whitespace-nowrap">
                      {h.open} – {h.close}
                    </span>
                  </li>
                );
              })}
            </ul>

            {opensLaterToday && (
              <p className="mt-5 text-sm italic opacity-70">
                We open today at {row.open}. See you soon!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
