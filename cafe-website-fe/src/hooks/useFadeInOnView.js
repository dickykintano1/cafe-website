import { useEffect, useRef } from "react";

export default function useFadeInOnView({animation, retrigger}) {
  const ref = useRef(null);
  const lastY = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //initial state
    el.classList.add("opacity-0");
    const startClasses = {
      fadeInRight: ["-translate-x-3"],
      fadeInLeft: ["translate-x-3"],
      fadeInRightDrop: ["-translate-x-24", "scale-110", "shadow-xl"],
      fadeInLeftDrop: ["translate-x-24"],
    };
    const startClass = startClasses[animation];
    if (startClass) {
      el.classList.add(...startClass);
      el.dataset.startClass = JSON.stringify(startClass);
    }

    //check and trigger on view without scroll
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    if (inView) {
      animateIn(el, animation);
      hasAnimated.current = true;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;
        const scrollingDown = currentY < lastY.current;
        const scrollingUp = currentY > lastY.current;

        // ELEMENT ENTERS VIEWPORT
        if (entry.isIntersecting) {
          animateIn(el, animation);
          hasAnimated.current = true;
        }

        // ELEMENT LEAVES VIEWPORT (RESET ONLY WHEN LEAVING UPWARDS)
        if (
          !entry.isIntersecting &&
          scrollingUp &&
          retrigger === "yes"
        ) {
          reset(el);
          hasAnimated.current = false;
        }

        // Save last position
        lastY.current = currentY;
      },
      { threshold: 0.2, }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function animateIn(el){
  const startClasses = JSON.parse(el.dataset.startClass || "[]");
  if (startClasses[0]){el.classList.remove(startClasses[0])}
  if (startClasses[1]){
    setTimeout(() => {
      el.classList.remove(...startClasses);
    }, 400);
  };
  el.classList.add("opacity-100", "shadow-md", "transform", "transition-all", "duration-2000", "ease-out");
}
