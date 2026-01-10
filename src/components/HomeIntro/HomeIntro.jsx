import React, { useEffect, useState } from "react";
import LargeTitle from "./LargeTitle";
import BackgroundStar from "../BackgroundStar";

const HomeIntro = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="w-full h-full flex overflow-hidden bg-gradient-to-r from-blue-dark to-blue-mid justify-center items-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative w-[1440px] h-full ">
          <div className="absolute inset-0 z-0 ">
            {/* Top-left star */}
            <BackgroundStar
              top="-50px"
              left="-100px"
              size={500}
              rotation={18}
              opacity={0.18}
            />

            {/* bottom left star */}
            <BackgroundStar
              top="200px"
              left="275px"
              size={500}
              rotation={-25}
              opacity={0.14}
            />

            {/* Top-middle star */}
            <BackgroundStar
              top="-300px"
              left="350px"
              size={560}
              rotation={45}
              opacity={0.16}
            />

            {/* Bottom-right star */}
            <BackgroundStar
              top="000px"
              left="750px"
              size={750}
              rotation={5}
              opacity={0.16}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden z-[1]">
        <div className="border-b-[30px] border-blue-light flex w-full items-center justify-center overflow-hidden ">
          <div className="flex justify-center pb-10 w-full">
            {/* WRAPPER THAT DEFINES THE TOTAL WIDTH */}
            <div className="relative flex items-center pt-20 w-[75rem]">
              {/* TITLE */}
              <LargeTitle />

              {/* IMAGE */}
              <img
                src="/PersonalPortfolio/coverpicture.png"
                className={`absolute right-0 bottom-[-40px] w-[30rem] h-[30rem] object-cover z-[1]
                  transition-opacity duration-[2000ms] ease-out
                  ${visible ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>
        </div>

        {/* STRIPES */}
        <div className="bg-stripes-vertical w-full z-[0] flex-1 min-h-[50px]" />
      </div>
    </div>
  );
};

export default HomeIntro;
