import React from "react";
import {
  Send,
  MessageCircle,
  Heart,
  Bookmark,
  X,
  Copy,
  Minus,
  Expand,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface CampaignLinkProps {
  image: string;
}
const CampaignLink = ({ image }: CampaignLinkProps) => {
  return (
    <div className="flex flex-col border-blue-dark border-4 rounded-md w-[500px] max-w-full overflow-hidden shadow-[10px_10px_0_0_#40476d]">
      {/* top bar */}
      <div className="flex w-full items-center justify-between bg-pink-1 p-1">
        <div className="flex items-center gap-1">
          <X size={36} />
          <Copy size={32} />
          <Minus size={32} />
        </div>
      </div>

      {/* IMAGE — intrinsic height */}
      <img
        src={image}
        className="w-full h-auto object-contain max-h-[520px]  bg-blue-dark"
      />

      {/* bottom bar */}
      <div className="flex w-full items-center h-[38px]  justify-start text-blue-dark bg-white ">
        <div className="flex  items-center gap-1 border-blue-dark border-r-2 border-t-2">
          <ArrowLeft size={36} />
        </div>
        <div className="flex w-full h-[38px] justify-start items-center gap-1 border-blue-dark border-t-2">
          <div className="flex w-1/5 h-full bg-pink-1"></div>
        </div>
        <div className="flex  items-center gap-1 border-blue-dark border-l-2 border-t-2">
          <ArrowRight size={36} />
        </div>
      </div>
    </div>
  );
};

export default CampaignLink;
