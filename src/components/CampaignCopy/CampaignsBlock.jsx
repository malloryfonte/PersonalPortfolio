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
  reverse = false,
  textLogo,
}) => {
  return (
    <div
      className={`w-full flex items-stretch gap-10 p-7 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* IMAGE */}
      <div className="flex flex-1">
        <Link to={link}>
          <CampaignLink image={imageSrc} title={title} />
        </Link>
      </div>

      {/* TEXT */}
      <div className="flex flex-col flex-1 h-full gap-2">
        <div className={`flex flex-col ${textLogo ? "gap-4" : ""}`}>
          {textLogo ? (
            <span className={` font-serifPro ${logoStyling}`}>{textLogo}</span>
          ) : (
            <img src={logo} className={` object-cover ${logoStyling}`} />
          )}
          <span className="text-blue-dark text-[1.5rem] font-brasika leading-tight">
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
