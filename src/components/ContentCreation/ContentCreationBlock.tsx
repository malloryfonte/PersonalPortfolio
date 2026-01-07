import React from "react";
import ImageLink from "./ImageLink";

interface Reel {
  id: string;
  url: string;
  image: string;
}

interface ContentCreationBlockProps {
  title: string;
  description: string[]; // use string[] instead of [string]
  reels: Reel[];
  reverse?: boolean; // new prop
  specificImage?: { url: string; image: string };
}

const ContentCreationBlock = ({
  title,
  description,
  reels,
  reverse = false,
  specificImage,
}: ContentCreationBlockProps) => {
  return (
    <div
      className={`flex w-full justify-center items-center gap-10 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* TEXT */}
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        <span className="font-perandory block leading-none tracking-tight text-[6rem]">
          {title}
        </span>

        <ul className="list-disc list-inside">
          {description.map((item, idx) => (
            <li key={idx}>
              <span className="font-judson">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {specificImage && (
        <div className="flex flex-1 shrink-0">
          <a
            href={specificImage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105 "
          >
            <img
              src={specificImage.image}
              className=" w-full h-full object-cover  hover:scale-105"
            />
          </a>
        </div>
      )}

      {/* REELS */}
      <div className="flex gap-2 shrink-0">
        {reels.map((reel) => (
          <ImageLink key={reel.id} url={reel.url} image={reel.image} />
        ))}
      </div>
    </div>
  );
};

export default ContentCreationBlock;
