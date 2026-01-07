import React from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../HomeConnect/ArrowButton";
import CampaignLink from "./CampaignLink";

const CampaignBlock = ({
  title,
  link,
  imageSrc,
  buttontext,
  description,
  logo,
  logoStyling,
}) => {
  return (
    <div className="w-full flex items-stretch gap-10 p-7">
      <div className="flex flex-1">
        <Link to={link}>
          <CampaignLink image={imageSrc} title={title} />
        </Link>
      </div>
      <div className="flex flex-col flex-1 h-full gap-2">
        <div className="flex flex-col">
          <img
            src={logo}
            className={` w-[320px] object-cover ${logoStyling}`}
          />
          <span className="text-blue-dark text-[1.5rem] font-brasika  leading-tight">
            {title}
          </span>
        </div>
        <span className="text-blue-dark font-judson text-[1.1rem]">
          {description}
        </span>
        <div className="flex w-full items-center justify-start">
          <ArrowButton
            text={buttontext}
            link={link}
            background="#40476d"
            newTab={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignBlock;
