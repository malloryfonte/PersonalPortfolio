import React from "react";
import LargeNavigation from "../components/LargeNavigation";
import SideLinks from "../components/SideLinks";
import ContentCreationBody from "../components/ContentCreation/ContentCreationBody";
import ScrollTop from "./ScrollTop";
import UpArrow from "../components/UpArrow";

const ContentCreation = () => {
  return (
    <div className=" max-w-screen min-h-screen flex-col">
      <ScrollTop />
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full bg-blue-light items-center flex justify-center">
        <ContentCreationBody />
      </div>
      <UpArrow />
    </div>
  );
};

export default ContentCreation;
