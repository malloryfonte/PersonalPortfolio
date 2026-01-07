import React from "react";

interface RecommendationProps {
  description: string[];
  image: string;
  name: string;
  title: string;
  company: string;
  reverse?: boolean; // <-- new prop
}

const Recommendation = ({
  description,
  image,
  name,
  title,
  company,
  reverse = false,
}: RecommendationProps) => {
  return (
    <div
      className={`grid w-full max-w-[1000px] grid-cols-[1fr_260px] gap-12 items-center ${
        reverse ? "direction-rtl" : ""
      }`}
    >
      {/* DESCRIPTION */}
      <div className="h-[260px] bg-white rounded-3xl p-6 flex flex-col justify-center gap-4">
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="font-judson leading-snug text-balance"
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.25rem)" }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* IMAGE + BLURB */}
      <div className="relative w-[260px] h-[260px] shrink-0">
        {/* Image */}
        <img src={image} className="w-full h-full rounded-full object-cover" />

        {/* Blurb */}
        <div className="absolute bottom-[-1.5rem] right-[-1.5rem] bg-blue-dark text-white font-judson p-4 rounded-2xl shadow-lg w-[180px]">
          <span className="block text-[1.1rem] font-bold leading-tight">
            {name}
          </span>
          <span className="block text-[1rem] leading-tight">{title}</span>
          <span className="block text-[1rem] italic leading-tight">
            {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
