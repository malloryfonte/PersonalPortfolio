import React from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../HomeConnect/ArrowButton";
import CampaignLink from "./CampaignLink";
import { useMediaQuery } from "react-responsive";

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
  const isPhoneScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-16 p-4 md:p-7  ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="flex flex-col md:flex-1 w-full ">
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
          <span className="text-blue-dark text-[1rem] md:text-[1.5rem] font-brasika leading-tight break-words">
            {title}
          </span>
        </div>

        <span className="text-blue-dark font-judson text-[0.9rem] md:text-[1.1rem] break-words">
          {description}
        </span>

        {!isPhoneScreen && (
          <div className="flex w-full items-center justify-start">
            <ArrowButton
              text={buttontext}
              link={link}
              background="#40476d"
              newTab={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignBlock;
