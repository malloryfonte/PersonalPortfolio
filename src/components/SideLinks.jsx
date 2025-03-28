import React from "react";
import { contact } from "../constants";

const SideLinks = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-[4rem]  flex flex-col items-center justify-center space-y-4 z-10">
      {contact.map((contact) => (
        <a
          key={contact.id}
          href={contact.link}
          className=" hover:text-brown-1 transition-colors text-pink-2"
          target={contact.target}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="36"
            width="36"
          >
            <path d={contact.path}></path>
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SideLinks;
