import React from "react";
import { useEffect, useState } from "react";

const LargeTitle = () => {
  const [nameSlide, setnameSlide] = useState(false);
  const [portfolioSlide, setportfolioSlide] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setnameSlide(true);
    }, 50);

    const portfolioTimer = setTimeout(() => {
      setportfolioSlide(true);
    }, 600);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(portfolioTimer);
    };
  }, []);
  return (
    <div className="w-[1024px] h-[200px]  text-pink-1 ">
      <div
        className={`items-center justify-center flex font-judson w-full h-full transition-all duration-500 ease-in-out ${
          nameSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-60px] opacity-0"
        }`}
      >
        <p className="text-[9rem] font-semibold tracking-wide ">
          Mallory Fonte
        </p>
      </div>
      <div
        className={`justify-end w-full flex text-[5rem] mt-[-5rem] font-caraterre transition-all duration-500 ease-in-out ${
          portfolioSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-60px] opacity-0"
        }`}
      >
        <p>portfolio</p>
      </div>
    </div>
  );
};

export default LargeTitle;
