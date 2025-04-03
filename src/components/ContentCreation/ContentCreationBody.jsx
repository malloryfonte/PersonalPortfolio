import React, { useState } from "react";
import { contentcreation } from "../../constants";

const ContentCreationBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] flex flex-col items-center bg-black-1">
      <div className="text-[12rem] font-perandory pt-20 text-cream-1 flex flex-col items-center justify-center">
        <p className="m-0">Content Creation</p>
        <p className="text-[1.5rem] text-center font-judson mt-[-4rem]">
          My portfolio includes a diverse range of work, from sponsored content
          on my personal page to entertainment and lifestyle pieces, as well as
          content created for external brands and platforms.
        </p>
        <p className="text-[1.5rem] text-center font-judson mt-[2rem]">
          Click to view content
        </p>
      </div>

      <div
        className={`w-full h-full flex items-center justify-center flex-wrap gap-4 py-10 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {contentcreation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={`Content ${item.id}`}
              className="w-[20rem] max-h-[30rem] object-fill rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContentCreationBody;
