import { useEffect, useRef } from "react";

export default function useFadeInOnView({animation, reTrigger}) {
  const ref = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //initial state
    el.classList.add("opacity-0");
    if (direction === "right") el.classList.add("-translate-x-3");
    if (direction === "left") el.classList.add("translate-x-3");

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;
        const scrollingDown = currentY < lastY.current;
        const scrollingUp = currentY > lastY.current;

        // ELEMENT ENTERS VIEWPORT
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("-translate-x-3", "translate-x-3");
        }

        // ELEMENT LEAVES VIEWPORT (RESET ONLY WHEN LEAVING UPWARDS)
        if (!entry.isIntersecting && scrollingUp) {
          // User scrolled back UP past the section → reset for retrigger
          el.classList.remove("opacity-100");

          if (direction === "right") el.classList.add("-translate-x-3");
          if (direction === "left") el.classList.add("translate-x-3");
        }

        // Save last position
        lastY.current = currentY;
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return ref;
}

function useFadeinRight (){
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //initial state
    el.classList.add("opacity-0 -translate-x-3");

    const observer = new IntersectionObserver(([entry]) => {
      // ELEMENT ENTERS VIEWPORT
      if (entry.isIntersecting) {
        el.classList.add("opacity-100");
        el.classList.remove("-translate-x-3");
      }
    },
    { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return ref;
}
