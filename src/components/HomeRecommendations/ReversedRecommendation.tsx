import React from "react";

interface ReversedRecommendationProps {
  description: string;
  image: string;
  name: string;
  title: string;
  company: string;
}

const ReversedRecommendation = ({
  description,
  image,
  name,
  title,
  company,
}: ReversedRecommendationProps) => {
  return (
    <div className="grid w-full max-w-[1000px] grid-cols-[260px_1fr] gap-12 items-center">
      {/* IMAGE + BLURB */}
      <div className="relative w-[260px] h-[260px] shrink-0">
        <img src={image} className="w-full h-full rounded-full object-cover" />

        <div className="absolute bottom-[-1.5rem] left-[-1.5rem] bg-blue-dark text-white font-judson p-4 rounded-2xl shadow-lg w-[180px]">
          <span className="block text-[1.1rem] font-bold leading-tight">
            {name}
          </span>
          <span className="block text-[1rem] leading-tight">{title}</span>
          <span className="block text-[1rem] italic leading-tight">
            {company}
          </span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="h-[260px] bg-white rounded-3xl p-6 flex items-center">
        <p
          className="font-judson leading-snug text-balance"
          style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.25rem)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReversedRecommendation;
