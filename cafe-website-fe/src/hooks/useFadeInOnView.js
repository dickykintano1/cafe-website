import { useEffect, useRef } from "react";

export default function useFadeInOnView({animation, retrigger}) {
  const ref = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //initial state
    el.classList.add("opacity-0");
    if (animation == "fadeInRight") {
        el.classList.add("-translate-x-3");
        el.dataset.startClass = "-translate-x-3"; 
    }
    if (animation == "fadeInLeft") {
        el.classList.add("translate-x-3");
        el.dataset.startClass = "translate-x-3"; 
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;
        const scrollingDown = currentY < lastY.current;
        const scrollingUp = currentY > lastY.current;

        // ELEMENT ENTERS VIEWPORT
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          if (animation == "fadeInRight"){useFadeinRight(el)}
          if (animation == "fadeInLeft"){useFadeinLeft(el)}
        }

        // ELEMENT LEAVES VIEWPORT (RESET ONLY WHEN LEAVING UPWARDS)
        if (!entry.isIntersecting && scrollingUp && retrigger == "yes") {
          useRetrigger(el);
        }

        // Save last position
        lastY.current = currentY;
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function useFadeinRight(el){
  el.classList.remove("-translate-x-3");
}

function useFadeinLeft(el){
  el.classList.remove("translate-x-3");
}

function useRetrigger(el){
  const startClass = el.dataset.startClass;
  el.classList.remove("opacity-100");
  if (startClass) {
    el.classList.add(startClass);
  }
}
