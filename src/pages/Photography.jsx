import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import PhotographyBody from "../components/Photography/PhotographyBody";

const Photography = () => {
  return (
    <div className=" w-screen min-h-screen flex-col">
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full bg-cream-1 items-center flex justify-center">
        <PhotographyBody />
      </div>
    </div>
  );
};

export default Photography;
