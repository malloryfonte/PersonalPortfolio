import React from "react";

interface ImageLinkProps {
  url: string;
  image: string;
}

const ImageLink = ({ url, image }: ImageLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-105 border-[10px] border-black-1 rounded-[2rem] overflow-hidden"
    >
      <div className="w-full flex flex-col items-center justify-center relative">
        <img src={image} className="w-[12rem] h-[25rem] object-cover" />

        {/* Black box overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[0px] w-[8rem] h-[20px] bg-black-1 rounded-b-xl flex items-center justify-center gap-2">
          <div className="h-[5px] w-[70px] bg-gray-500 rounded-full"></div>
          <div className="h-[5px] w-[5px] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </a>
  );
};

export default ImageLink;
