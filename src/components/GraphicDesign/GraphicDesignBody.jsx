import React from "react";
import { graphicnav } from "../../constants";
import { useState } from "react";

const GraphicDesignBody = () => {
  const [activeSection, setActiveSection] = useState(graphicnav[0].id);
  const [fade, setFade] = useState(true);

  // Function to handle button click
  const handleButtonClick = (index) => {
    if (index !== activeSection) {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setActiveSection(index);
        setFade(true); // Trigger fade-in
      }, 400); // Match fade duration
    }
  };

  return (
    <div className="w-[1024px] flex flex-col items-center bg-black-1 ">
      <div className="text-[12rem] font-perandory pt-20 text-cream-1">
        <p className="m-0">Graphic Design</p>
      </div>
      <div className="flex rounded-lg w-[55rem] h-[50px] overflow-hidden mt-[-3rem]">
        {graphicnav.map((item) => (
          <div
            className="w-full h-full flex items-center justify-center"
            key={item.id}
          >
            <button
              className={`flex items-center justify-center w-full bg-cream-1 h-full transition-all text-opacity-80 hover:bg-opacity-90  ease-in-out duration-300 ${
                activeSection === item.id ? "text-pink-1" : "text-black-1"
              }`}
              onClick={() => handleButtonClick(item.id)}
            >
              <div
                className={` bg-dark-2 h-full w-full rounded-lg flex items-center justify-center px-2 gap-x-2`}
              >
                <p className="font-judson">{item.title}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div
        className={` w-full h-full flex items-center justify-center flex-wrap gap-4 p-10 transition-all duration-1000 ease-in-out  ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {graphicnav
          .find((item) => item.id === activeSection)
          ?.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-[27rem] max-h-[40rem] object-cover rounded-lg"
            />
          ))}
      </div>
    </div>
  );
};

export default GraphicDesignBody;
