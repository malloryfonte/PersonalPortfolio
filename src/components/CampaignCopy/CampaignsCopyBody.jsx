import React, { useState } from "react";
import CampaignBlock from "./CampaignsBlock";
import BackgroundStar from "../BackgroundStar";

const CampaignsCopyBody = ({ isPhoneScreen }) => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-full max-w-[calc(100vw-2rem)] md:w-[1024px] md:max-w-none flex flex-col items-center">
      <div className="text-[4rem] md:text-[12rem] font-perandory pt-10 md:pt-20  md:pb-0 text-blue-dark flex flex-col items-center justify-center z-[1]">
        <p className="m-0">Campaigns & Copy</p>
      </div>
      <div className="w-full flex flex-col gap-10">
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
          title="Custom card deck release"
          link="/CampaignsCopy/SmoshFlip7"
          imageSrc="/PersonalPortfolio//Campaigns/Logos/smoshThumbNail.png"
          logo="/PersonalPortfolio//Campaigns/Logos/smosh logo.png"
          buttontext="View Campaign"
          description={
            "Theoretical card game collaboration between SMOSH and Flip"
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
          logoStyling={"text-white text-[2.7rem] mt-[25px] leading-tight"}
          textLogo={"Chamberlain Coffee & Conan Gray"}
        />
      </div>
    </div>
  );
};

export default CampaignsCopyBody;
