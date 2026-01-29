import React from "react";
import { X, Copy, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

interface CampaignLinkProps {
  image: string;
}
const CampaignLink = ({ image }: CampaignLinkProps) => {
  const isPhoneScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="flex flex-col border-blue-dark border-2 md:border-4 rounded-md w-full md:w-[500px] overflow-hidden shadow-[5px_5px_0_0_#40476d] md:shadow-[10px_10px_0_0_#40476d]">
      {/* top bar */}
      <div className="flex w-full items-center justify-between bg-pink-1 p-1">
        <div className="flex items-center gap-0.5 md:gap-1">
          <X size={isPhoneScreen ? 24 : 36} />
          <Copy size={isPhoneScreen ? 20 : 32} />
          <Minus size={isPhoneScreen ? 20 : 32} />
        </div>
      </div>

      {/* IMAGE — intrinsic height */}
      <img
        src={image}
        className="w-full h-auto object-contain max-h-[300px] md:max-h-[520px] bg-blue-dark"
      />

      {/* bottom bar */}
      <div className="flex w-full items-stretch h-[30px] md:h-[38px] justify-start text-blue-dark bg-white">
        <div className="flex items-center justify-center h-full border-blue-dark border-r-2 border-t-2 px-1">
          <ArrowLeft size={isPhoneScreen ? 24 : 36} />
        </div>
        <div className="flex w-full h-full justify-start items-center border-blue-dark border-t-2">
          <div className="flex w-1/5 h-full bg-pink-1"></div>
        </div>
        <div className="flex items-center justify-center h-full border-blue-dark border-l-2 border-t-2 px-1">
          <ArrowRight size={isPhoneScreen ? 24 : 36} />
        </div>
      </div>
    </div>
  );
};

export default CampaignLink;
