import React from "react";
import LargeNavigation from "../LargeNavigation";
import SideLinks from "../SideLinks";
import { Billie } from "../../constants";

const BilliePage = () => {
  const images = Billie[0].images;

  return (
    <div className=" max-w-screen min-h-screen flex-col bg-black-1">
      <div className="fixed top-0 z-10 hidden w-full md:block">
        <LargeNavigation />
      </div>

      <SideLinks />

      <div className=" w-full bg-black-1 flex items-center justify-center">
        <div className="w-[1024px] pb-[3rem] flex flex-col items-center justify-center pt-[5rem] space-y-5 ">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Billie ${idx + 1}`}
              className="w-full object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BilliePage;
