import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const index = () => {
  const fadeInH1 = useFadeIn(2, 5);
  const fadeInP = useFadeIn(5);
  return (
    <div>
      <h1 {...fadeInH1}>Fade in</h1>
      <p {...fadeInP}>klasdjfkljasdflk</p>
    </div>
  );
};

export default index;
