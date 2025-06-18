import React from "react";
import { Link } from "react-router-dom";

const BackArrow = ({ link }) => {
  return (
    <div className="fixed top-[15%] left-0 transform -translate-y-1/2 w-[4rem]  flex flex-col items-center justify-center space-y-4 z-10">
      <Link to={link}>
        <button
          className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
          title="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-pink-2"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M11 6L5 12M5 12L11 18M5 12H19"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default BackArrow;
