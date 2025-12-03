import { useEffect, useRef } from "react";

export default function useFadeInOnView({direction}) {
  const ref = useRef(null);
  console.log('direction ---->'+ direction)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && direction == 'right'){
          el.classList.add("opacity-100", "translate-x-3");
        }
        if (entry.isIntersecting && direction == 'left'){
          el.classList.add("opacity-100", "-translate-x-3");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
