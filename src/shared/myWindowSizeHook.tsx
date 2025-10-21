import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    isMobileSize: window.innerWidth < 960,
    isDesctopSize: window.innerWidth > 960,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isMobileSize: window.innerWidth < 960,
        isDesctopSize: window.innerWidth > 960,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
