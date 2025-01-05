import React from "react";
import { rolecards } from "../../constants";

const RoleCards = () => {
  return (
    <div className="w-[1024px] h-full flex items-center justify-between">
      {rolecards.map((role) => (
        <div
          key={role.id}
          className="w-[20rem] h-[30rem] rounded-2xl relative overflow-hidden shadow-card"
        >
          <img src={role.image} className="h-[27rem]" />
          <div className="bg-pink-1 w-full h-[3rem] bottom-0 absolute items-center flex justify-center">
            <p className="text-[1.5rem] text-pink-2">{role.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleCards;
