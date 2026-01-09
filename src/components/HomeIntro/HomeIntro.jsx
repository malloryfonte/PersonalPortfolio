import React, { useEffect, useState } from "react";
import LargeTitle from "./LargeTitle";
import RoleCards from "./RoleCards";

const HomeIntro = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="w-full h-full flex overflow-hidden bg-gradient-to-r from-blue-dark to-blue-mid justify-center items-center ">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className="border-b-[30px] border-blue-light flex w-full items-center justify-center overflow-hidden">
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
        <div className="bg-stripes-vertical w-full z-[0] flex-1" />
      </div>
    </div>
  );
};

export default HomeIntro;
