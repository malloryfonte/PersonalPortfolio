import React from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";

const LargeNavigation = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-pink-1 h-[80px] px-4 flex">
      <div
        className={` w-full h-full items-center flex text-pink-2 text-2xl  ${
          location.pathname === "/" ? "text-brown-1" : "text-pink-2"
        } `}
      >
        <a href="/">Mallory Fonte</a>
      </div>
      <div className="flex gap-10">
        {navigation.map((navItem) => (
          <div
            key={navItem.id}
            className={`w-full h-full items-center flex  text-lg justify-end whitespace-nowrap ${
              location.pathname === navItem.url ? "text-brown-1" : "text-pink-2"
            }`}
          >
            <a href={navItem.url} className="hover:underline">
              {navItem.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeNavigation;
