import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import PhotographyBody from "../components/Photography/PhotographyBody";
import ScrollTop from "./ScrollTop";
import UpArrow from "../components/UpArrow";

const Photography = () => {
  return (
    <div className=" max-w-screen min-h-screen flex-col bg-blue-dark">
      <ScrollTop />
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full  items-center flex justify-center">
        <PhotographyBody />
      </div>
      <UpArrow dark />
    </div>
  );
};

export default Photography;
