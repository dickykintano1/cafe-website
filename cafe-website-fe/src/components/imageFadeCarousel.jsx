import { useState, useEffect, useRef } from "react";

export default function ImageFadeCarousel({}){
  const imgList = ['1', '2', '3'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on the element's intersection status
        setIsVisible(entry.isIntersecting); 
      },
      {
        // root: null means the viewport is the root
        // threshold: 0.1 means trigger when 10% of the element is visible
        threshold: 0.1, 
      }
    );

    // Start observing the carousel container if the ref is attached
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (carouselRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(carouselRef.current);
      }
    };
  }, []); // Run only once on mount

  useEffect(() => {
    if(isVisible){
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % imgList.length);
      }, 7000); 
    }else{
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, imgList.length]);

  const displayedImage = imgList[currentIndex];

  console.log(displayedImage);
  
  return (
    <div ref={carouselRef} style={{ height: '300px', border: '1px solid gray', overflow: 'hidden' }}>
      <h2>Image Carousel</h2>
      <p>Currently Displaying: {displayedImage} (Is Visible: {isVisible ? 'YES' : 'NO'})</p>
      {/* Actual image content goes here */}
    </div>
  );
}