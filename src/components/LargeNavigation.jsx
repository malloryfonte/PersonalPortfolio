import React from "react";
import { useLocation, Link } from "react-router-dom";
import { navigation } from "../constants";

const LargeNavigation = () => {
  const location = useLocation();

  return (
    <div className="w-full font-judson h-[80px] bg-[#222222] px-4 flex">
      <div
        className={` w-full h-full items-center flex text-2xl  ${
          location.pathname === "/" ? "text-cream-1" : "text-pink-2"
        } `}
      >
        <Link to="/">Mallory Fonte</Link>
      </div>
      <div className="flex gap-10">
        {navigation.map((navItem) => {
          return (
            <div
              key={navItem.id}
              className={`w-full h-full items-center flex text-lg justify-end whitespace-nowrap ${
                location.pathname === navItem.url
                  ? "text-cream-1"
                  : "text-pink-2"
              }`}
            >
              <Link to={navItem.url} className="hover:underline">
                {navItem.title}
              </Link>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default LargeNavigation;
