import React, { useState } from "react";
import CampaignBlock from "./CampaignsBlock";

const CampaignsCopyBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] pb-[3rem] flex flex-col items-center ">
      <div className="text-[12rem] font-perandory pt-20 text-black-1 flex flex-col items-center justify-center">
        <p className="m-0">Campaigns & Copy</p>
      </div>
      <div className="w-full flex flex-col mt-[-3rem]">
        <CampaignBlock
          title="PR & Entertainment Campaign for Billie Eilish"
          link="/CampaignsCopy/BillieEilish"
          imageSrc="/PersonalPortfolio//Campaigns/Billie/Billie1.png"
          background="#FFCCF2"
        />
        <CampaignBlock
          title="Datebookstore Influencer Program"
          link="/CampaignsCopy/Datebookstore"
          imageSrc="/PersonalPortfolio//Campaigns/Datebooks/datebook.png"
          background="#FFCCF2"
        />
        <CampaignBlock
          title="Duolingo Analysis"
          link="/CampaignsCopy/Duolingo"
          imageSrc="/PersonalPortfolio//Campaigns/Duolingo/duo.jpg"
          background="#FFCCF2"
        />
      </div>
    </div>
  );
};

export default CampaignsCopyBody;
