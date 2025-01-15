import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import GraphicDesignBody from "../components/GraphicDesign/GraphicDesignBody";

const GraphicDesign = () => {
  return (
    <div className="bg-pink-2/50 w-screen min-h-screen flex-col font-judson">
      <div className="sticky top-0 z-10 hidden md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center ">
        <GraphicDesignBody />
      </div>
      <div className="h-screen w-full flex items-center justify-center ">
        <GraphicDesignBody />
      </div>
      <div className="h-screen w-full flex items-center justify-center ">
        <GraphicDesignBody />
      </div>
      <div className="h-screen w-full flex items-center justify-center ">
        <GraphicDesignBody />
      </div>
    </div>
  );
};

export default GraphicDesign;
