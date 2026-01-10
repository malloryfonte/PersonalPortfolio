import React, { useState } from "react";
import CampaignBlock from "./CampaignsBlock";
import BackgroundStar from "../BackgroundStar";

const CampaignsCopyBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] pb-[3rem] flex flex-col items-center ">
      <div className="text-[12rem] font-perandory pt-20 text-blue-dark flex flex-col items-center justify-center z-[1]">
        <p className="m-0">Campaigns & Copy</p>
      </div>
      <div className="w-full flex flex-col mt-[-3rem] gap-10">
        <CampaignBlock
          title="PR & Entertainment Campaign for Billie Eilish"
          link="/CampaignsCopy/BillieEilish"
          imageSrc="/PersonalPortfolio//Campaigns/Billie/Billie1.png"
          logo="/PersonalPortfolio//Campaigns/Logos/billie logo.png"
          buttontext="View Campaign"
          description={
            "Theoretical public relations and entertainment campaign for an upcoming Billie Eilish album"
          }
          logoStyling={"ml-[-11px] w-[320px]"}
        />
        <CampaignBlock
          title="Coffee Blend Collaboration"
          link="/CampaignsCopy/SmoshFlip7"
          imageSrc="/PersonalPortfolio//Campaigns/Logos/smoshThumbNail.png"
          logo="/PersonalPortfolio//Campaigns/Logos/smosh logo.png"
          buttontext="View Campaign"
          description={
            "Theoretical brand collaboration and integrated marketing campaign between Chamberlain Coffee and Conan Gray"
          }
          logoStyling={"ml-[-11px] w-[350px]"}
          reverse
        />
        <CampaignBlock
          title="Coffee Blend Collaboration"
          link="/CampaignsCopy/ChamberlainCoffeeConanGray"
          imageSrc="/PersonalPortfolio//Campaigns/ConanEmma/Portfolio Pieces (0).png"
          logo="/PersonalPortfolio//Campaigns/Logos/billie logo.png"
          buttontext="View Campaign"
          description={
            "Theoretical brand collaboration and integrated marketing campaign between Chamberlain Coffee and Conan Gray"
          }
          logoStyling={"text-white text-[2.5rem] mt-[25px]"}
          textLogo={"Chamberlain Coffee & Conan Gray"}
        />
      </div>
    </div>
  );
};

export default CampaignsCopyBody;
