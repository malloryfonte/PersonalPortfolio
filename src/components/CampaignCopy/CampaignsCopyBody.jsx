import React, { useState } from "react";
import { contentcreationreels, longformcontent } from "../../constants";
import ArrowButton from "../HomeConnect/ArrowButton";

const CampaignsCopyBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] pb-[3rem] flex flex-col items-center ">
      <div className="text-[12rem] font-perandory pt-20 text-black-1 flex flex-col items-center justify-center">
        <p className="m-0">Campaigns & Copy</p>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full items-center justify-start flex px-7 overflow-hidden space-x-10">
          <p className="text-[5rem] font-perandory text-black-1">
            PR & Entertainment Campaigns
          </p>
        </div>
        <div className="w-full items-center justify-between flex px-7 overflow-hidden space-x-10">
          <div className="flex flex-col justify-start items-start py-1">
            <p className="text-[3rem] font-perandory text-black-1">
              Campaign concept for Billie Eilish
            </p>
            <ArrowButton
              text="View Case Study"
              link="/CampaignsCopy/BillieEilish"
              background="#FFCCF2"
              newTab={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsCopyBody;
