import React from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../HomeConnect/ArrowButton";

const CampaignBlock = ({ title, link, imageSrc, background, buttontext }) => {
  return (
    <div className="w-full items-start justify-between flex p-7 overflow-hidden space-x-10 ">
      <div className="flex flex-col justify-start items-start">
        <p className="text-[3rem] font-perandory text-black-1">{title}</p>
        <ArrowButton
          text={buttontext}
          link={link}
          background={background}
          newTab={false}
        />
      </div>
      <div>
        <Link to={link}>
          <img
            src={imageSrc}
            alt={title}
            className="w-[300px] object-cover rounded-lg border-2 border-black-1 shadow-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default CampaignBlock;
