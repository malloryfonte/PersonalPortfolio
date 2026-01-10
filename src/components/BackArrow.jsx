import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BackArrow = ({ link }) => {
  return (
    <div className="fixed top-[125px] left-0 transform -translate-y-1/2 w-[4rem]  flex flex-col items-center justify-center space-y-4 z-10">
      <Link to={link}>
        <button
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100 text-blue-light"
          title="Go Back"
        >
          <ArrowLeft size={36} />
        </button>
      </Link>
    </div>
  );
};

export default BackArrow;
