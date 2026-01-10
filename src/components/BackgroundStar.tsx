import React from "react";

interface BackgroundStarProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  rotation?: number;
  opacity?: number;
}

const BackgroundStar = ({
  top,
  left,
  right,
  bottom,
  size = 500,
  rotation = 0,
  opacity = 0.15,
}: BackgroundStarProps) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        opacity,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-full h-full"
        fill="currentColor"
      >
        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
      </svg>
    </div>
  );
};

export default BackgroundStar;
