import React from "react";
import { navigation } from "../constants";

const LargeNavigation = () => {
  return (
    <div className="w-full bg-pink-1 h-[80px] px-4 flex">
      <div className=" w-full h-full items-center flex text-pink-2 text-2xl ">
        <a href="/">Mallory Fonte</a>
      </div>
      <div className="flex gap-10">
        {navigation.map((navItem) => (
          <div
            key={navItem.id}
            className="w-full h-full items-center flex text-pink-2 text-lg justify-end whitespace-nowrap"
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
