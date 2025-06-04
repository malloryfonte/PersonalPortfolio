import React from "react";

const ToolTag = ({ label }) => {
  return (
    <div className="border-black-1 p-1 border-2 rounded-lg text-sm md:text-base text-center w-full max-w-[12rem]">
      {label}
    </div>
  );
};

export default ToolTag;
