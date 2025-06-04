import React, { useState } from "react";
import { contentcreationreels, longformcontent } from "../../constants";

const ContentCreationBody = () => {
  const [fade, setFade] = useState(true);

  return (
    <div className="w-[1024px] flex flex-col items-center bg-black-1">
      <div className="text-[12rem] font-perandory pt-20 text-cream-1 flex flex-col items-center justify-center">
        <p className="m-0">Content Creation</p>
        <div className="w-full items-center justify-center flex px-7 overflow-hidden space-x-10">
          <p className="text-[12rem] font-perandory text-cream-1">Reels</p>
          <p className="text-[1.2rem] text-center font-judson ">
            My portfolio showcases a diverse range of work that reflects both my
            creativity and versatility as a content creator. It includes
            sponsored posts developed for my personal social media platforms,
            engaging entertainment and lifestyle content tailored for my target
            audience, and branded content produced for external companies across
            various industries. From visually driven Instagram campaigns to
            thoughtfully written blog posts and multi-platform promotional
            strategies, my work highlights a strong understanding of brand
            voice, audience engagement, and storytelling.
          </p>
        </div>
      </div>

      <div
        className={`w-full h-full flex items-center justify-center flex-wrap gap-4 py-10 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {contentcreationreels.map((item) => (
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
      <div className="w-full flex flex-col items-center justify-center pt-20 text-cream-1">
        <div className="w-full flex flex-col md:flex-row items-center justify-center px-7 gap-6">
          <p className="text-[8.5rem] font-perandory whitespace-nowrap pt-8">
            Long-Form Video
          </p>
          <p className="text-[1rem] md:text-[1.2rem] font-judson max-w-4xl text-left">
            This section features a mix of passion projects and client work, all
            focused on long-form video content. From storytelling-driven pieces
            to branded campaigns, each project reflects my creative direction
            and production skills.
          </p>
        </div>
      </div>
      <div
        className={`w-full h-full flex items-center justify-center flex-wrap gap-4 py-10 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {longformcontent.map((item) => (
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
              className="w-[30rem] h-[20rem] object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContentCreationBody;
