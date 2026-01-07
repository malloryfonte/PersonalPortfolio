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
    <div className="flex flex-col w-full text-blue-light justify-center items-center z-[2] ">
      <div
        className={`flex items-center mt-[8rem] md:mt-[10rem] lg:mt-[12rem] font-perandory w-full transition-all duration-500 ease-in-out ${
          nameSlide
            ? "translate-x-0 opacity-100"
            : "translate-x-[-60px] opacity-0"
        }`}
      >
        <div className="flex flex-col items-start justify-start w-full">
          {/* NAME */}
          <span
            className="
            leading-none 
            text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem]
          "
          >
            Mallory Fonte
          </span>

          {/* SUBTITLE + PORTFOLIO */}
          <div
            className="
            flex gap-4 sm:gap-6 md:gap-8
            mt-[-0.5rem] sm:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2.5rem]
          "
          >
            <span
              className="
              text-nowrap
              text-[1.2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]
            "
            >
              BRAND CREATOR & DIRECTOR
            </span>

            <div
              className={`
              justify-end w-full flex font-brasika transition-all duration-500 ease-in-out 
              ${
                portfolioSlide
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100px] opacity-0"
              }
            `}
            >
              <p
                className="
                text-white 
                text-[1.2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 
                mt-[-0.3rem] sm:mt-[-0.6rem] md:mt-[-1rem] lg:mt-[-1.2rem]
              "
              >
                portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeTitle;
