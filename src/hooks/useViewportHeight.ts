import { useState, useEffect } from "react";

export const useViewportHeight = (threshold: number = 500) => {
  const [isViewportShort, setIsViewportShort] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsViewportShort(window.innerHeight < threshold);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isViewportShort;
};
