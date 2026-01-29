import React from "react";
import { useMediaQuery } from "react-responsive";
import { contact } from "../../constants";

const HomeAboutMe = () => {
  const isPhoneScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative w-full h-full overflow-hidden bg-blue-light">
      {isPhoneScreen ? (
        <>
          {/* Phone layout: full-width stripe, centered title, no image */}
          <div className="w-full bg-stripes-vertical bg-bottom bg-no-repeat">
            <div className="px-6 py-0 flex justify-center">
              <span className="text-white font-perandory text-[3.2rem] leading-tight text-center block">
                A bit about me
              </span>
            </div>
          </div>

          <div className="w-full px-6 pb-16 pt-6">
            <div className="max-w-[70ch] mx-auto text-center font-judson text-base text-blue-large leading-relaxed">
              <p>
                Hi, I’m Mallory, a senior at Purdue University graduating in May
                2026 with a degree in Public Relations and Mass Media
                Communication. I’ve gained 10+ internships and work experiences
                during my time at Purdue and am now seeking my next post-grad
                opportunity.
              </p>

              <p className="mt-4">
                I’m passionate about marketing in entertainment, beauty,
                fashion, music, or film, and I love where creativity can lead.
                On campus, I’m involved with Higher Ground Dance Company and
                Purdue Student Government. When I’m not busy, you’ll find me at
                a concert, painting, or spending time with friends.
              </p>

              <p className="mt-4">Thanks for stopping by—let’s connect!</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Desktop layout: original two-tone background and grid with image on right */}
          <div className="absolute top-0 left-0 w-full h-[40%] bg-stripes-vertical" />
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-blue-light" />

          <div className="relative mx-auto w-[1080px] h-full grid grid-cols-[1fr_420px] grid-rows-[40%_60%] gap-x-10">
            {/* Title */}
            <div className="flex items-end pb-10">
              <span className="text-white font-perandory text-[9rem] leading-[.75]">
                A bit about me
              </span>
            </div>

            {/* Image (spans rows) */}
            <div className="row-span-2 flex items-center justify-end">
              <div className="border-[15px] border-blue-dark">
                <img
                  src="/PersonalPortfolio/headshot1.jpg"
                  className="object-cover w-[25rem] h-[38rem]"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-8 items-start pt-10 font-judson text-blue-large text-[1.1rem] leading-tight">
              <span className=" max-w-full">
                Hey there! I’m Mallory, a senior at Purdue University graduating
                in May 2026 with a Bachelor’s degree in Public Relations and
                Mass Media Communication. During my time at Purdue, I’ve been
                grateful to gain 10+ internships and work experiences (you can
                explore them in my Experience tab!), and I’m currently on the
                hunt for my next opportunity post-graduation.
              </span>
              <span className=" max-w-full">
                My dream is to work in marketing within the entertainment,
                beauty, fashion, music, or film industries, but I’m always
                excited to see where creativity and curiosity may take me. On
                campus, I’m involved with Higher Ground Dance Company and Purdue
                Student Government. Outside of class, work, rehearsals, and
                meetings, you’ll usually find me at a concert, painting, or
                spending time with the incredible people I’ve met along the way.
              </span>

              <span className=" max-w-full">
                Thanks for stopping by. I’m glad you’re here, and I encourage
                you to connect!
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeAboutMe;
