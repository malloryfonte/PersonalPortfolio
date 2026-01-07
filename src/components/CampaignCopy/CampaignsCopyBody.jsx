import React, { useState } from "react";
import CampaignBlock from "./CampaignsBlock";

const CampaignsCopyBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] pb-[3rem] flex flex-col items-center ">
      <div className="text-[12rem] font-perandory pt-20 text-blue-dark flex flex-col items-center justify-center">
        <p className="m-0">Campaigns & Copy</p>
      </div>
      <div className="w-full flex flex-col mt-[-3rem]">
        <CampaignBlock
          title="PR & Entertainment Campaign for Billie Eilish"
          link="/CampaignsCopy/BillieEilish"
          imageSrc="/PersonalPortfolio//Campaigns/Billie/Billie1.png"
          logo="/PersonalPortfolio//Campaigns/Logos/billie logo.png"
          buttontext="View Campaign"
          description={
            "Theoretical public relations and entertainment campaign for an upcoming Billie Eilish album"
          }
          logoStyling={"ml-[-11px]"}
        />
      </div>
    </div>
  );
};

export default CampaignsCopyBody;
