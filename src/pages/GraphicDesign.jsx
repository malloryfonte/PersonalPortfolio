import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import GraphicDesignBody from "../components/GraphicDesign/GraphicDesignBody";

const GraphicDesign = () => {
  return (
    <div className=" w-screen min-h-screen flex-col">
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full bg-black-1 items-center flex justify-center">
        <GraphicDesignBody />
      </div>
    </div>
  );
};

export default GraphicDesign;
