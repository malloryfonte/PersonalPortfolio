import React from "react";
import { useLocation, Link } from "react-router-dom";
import { navigation } from "../constants";

const LargeNavigation = () => {
  const location = useLocation();

  return (
    <div className="w-full font-judson h-[80px] bg-blue-mid px-4 flex z-20  border-b-2 border-b-[#222222]">
      <div
        className={` w-full h-full items-center flex text-2xl  ${
          location.pathname === "/" ? "text-blue-light" : "text-[#222222]"
        } `}
      >
        <Link to="/">Mallory Fonte</Link>
      </div>
      <div className="flex gap-10">
        {navigation.map((navItem) => {
          const isActive = location.pathname.startsWith(navItem.url);
          return (
            <div
              key={navItem.id}
              className={`w-full h-full items-center flex text-lg justify-end whitespace-nowrap ${
                isActive ? "text-blue-light" : "text-[#222222]"
              }`}
            >
              <Link to={navItem.url} className="hover:underline">
                {navItem.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LargeNavigation;
