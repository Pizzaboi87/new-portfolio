import { createContext, useState, useEffect } from "react";

export const CheckSizeContext = createContext();

export const CheckSizeContextProvider = ({ children }) => {
  const [smallView, setSmallView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1080px)").matches) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CheckSizeContext.Provider value={smallView}>
      {children}
    </CheckSizeContext.Provider>
  );
};
