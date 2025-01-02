import React from "react";
import LargeNavigation from "../components/LargeNavigation";

const Home = () => {
  return (
    <div className="bg-pink-2 w-screen h-screen">
      <div className="md:block hidden">
        <LargeNavigation />
      </div>
    </div>
  );
};

export default Home;
