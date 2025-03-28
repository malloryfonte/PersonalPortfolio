import React from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";

const LargeNavigation = () => {
  const location = useLocation();
  const basePath = "/PersonalPortfolio";

  return (
    <div className="w-full font-judson h-[80px] bg-[#222222] px-4 flex">
      <div
        className={` w-full h-full items-center flex text-2xl  ${
          location.pathname === "/" ? "text-cream-1" : "text-pink-2"
        } `}
      >
        <a href="/">Mallory Fonte</a>
      </div>
      <div className="flex gap-10">
        {navigation.map((navItem) => {
          const fullUrl = `${basePath}${navItem.url}`; // Ensure correct URL format

          return (
            <div
              key={navItem.id}
              className={`w-full h-full items-center flex text-lg justify-end whitespace-nowrap ${
                location.pathname === navItem.url
                  ? "text-cream-1"
                  : "text-pink-2"
              }`}
            >
              <a href={fullUrl} className="hover:underline">
                {navItem.title}
              </a>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default LargeNavigation;
