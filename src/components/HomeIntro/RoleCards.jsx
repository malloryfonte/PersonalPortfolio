import React from "react";
import { rolecards } from "../../constants";

const RoleCards = () => {
  return (
    <div
      className={`w-full  h-full flex items-center justify-between border-t-[20px] border-[#222222] `}
    >
      {rolecards.map((role, index) => (
        <div
          key={role.id}
          className={`h-[30rem] max-w-[25rem] relative ${
            index === 4 ? "splg:block hidden" : ""
          } 
          ${index === 3 ? "h-[30rem] max-w-[21rem]" : ""}
          ${index === 1 ? "h-[30rem] max-w-[30rem]" : ""} `}
        >
          <img
            src={role.image}
            className="h-[27rem] w-full object-cover brightness-0 invert"
          />
        </div>
      ))}
    </div>
  );
};

export default RoleCards;
