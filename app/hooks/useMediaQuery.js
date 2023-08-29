'use client'
import { useEffect, useState } from "react";

const useMediaQuery = (minWidth) => {
  
  const [width, setWidth] = useState(0);
  
  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  console.log(width)

  return width <= minWidth;
};

export default useMediaQuery;