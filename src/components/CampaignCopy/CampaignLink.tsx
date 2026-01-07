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
      <img src={image} className="w-full h-auto object-contain max-h-[520px]" />

      {/* bottom bar */}
      <div className="flex w-full h-[38px] items-center bg-white border-t-2 border-blue-dark">
        <ArrowLeft size={36} />
        <div className="flex-1 h-full bg-pink-1 mx-2" />
        <ArrowRight size={36} />
      </div>
    </div>
  );
};

export default CampaignLink;
