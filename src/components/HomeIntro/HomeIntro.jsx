import React from "react";
import LargeTitle from "./LargeTitle";
import RoleCards from "./RoleCards";

const HomeIntro = () => {
  return (
    <div className="w-full h-full flex-col bg-cream-1 overflow-hidden pt-10">
      <div className="w-full justify-center flex py-10">
        <LargeTitle />
      </div>

      <div className="w-full justify-center flex py-10 ">
        <RoleCards />
      </div>
    </div>
  );
};

export default HomeIntro;
