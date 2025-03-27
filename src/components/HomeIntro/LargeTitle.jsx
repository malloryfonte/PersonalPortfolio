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
    <div className="w-[1024px] h-[200px] text-black-1 ">
      <div
        className={`items-center justify-center font-perandory flex flex-col w-full h-full transition-all duration-500 ease-in-out  ${
          nameSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-60px] opacity-0"
        }`}
      >
        <p className="text-[12rem] tracking-wide ">Mallory Fonte</p>
        <p className="text-[2.5rem] mt-[-5rem] ml-[12rem] w-full">
          COMMUNICATIONS STUDENT, DESIGNER, AND SOCIAL MEDIA GURU
        </p>
      </div>
      <div></div>
      <div
        className={`justify-end w-full flex  mt-[-6rem] ml-[2rem] font-caraterre transition-all duration-500 ease-in-out ${
          portfolioSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-100px] opacity-0"
        }`}
      >
        <p className="text-[8rem] text-pink-1">portfolio</p>
      </div>
    </div>
  );
};

export default LargeTitle;
