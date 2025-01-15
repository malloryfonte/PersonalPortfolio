import React, { useState } from "react";
import { experience } from "../../constants";

const ExperienceBody = () => {
  const [activeButton, setActiveButton] = useState(experience[0].id);
  const [fade, setFade] = useState(true);

  // Function to handle button click
  const handleButtonClick = (index) => {
    if (index !== activeButton) {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setActiveButton(index);
        setFade(true); // Trigger fade-in
      }, 400); // Match fade duration
    }
  };
  return (
    <div className="w-full h-full items-center flex justify-center transition-all">
      <div className="w-[70vw] min-w-[1024px] h-[35rem] bg-white rounded-3xl flex relative justify-center border-[4px] border-pink-1 mt-[50px]">
        <div className="absolute top-0 left-0 w-full flex justify-evenly translate-y-[-50%]">
          {experience.map((expItem) => (
            <button
              key={expItem.id}
              className={`w-[225px] h-[80px] bg-white border-[4px] border-pink-1 rounded-3xl flex items-center justify-center transition-all duration-400 ease-in-out ${
                activeButton === expItem.id
                  ? "text-brown-1 border-brown-1"
                  : "text-pink-1"
              }`}
              onClick={() => handleButtonClick(expItem.id)}
            >
              <div className="w-full h-full flex-col ">
                <div className="flex items-center justify-center">
                  <p className="text-[1.5rem] ">{expItem.buttontitle}</p>
                </div>
                <div className="flex items-center justify-center ">
                  <div
                    className={`w-[150px] h-[30px] border-2  flex items-center justify-center rounded-3xl ${
                      activeButton === expItem.id
                        ? "border-brown-1"
                        : "border-pink-1"
                    }`}
                  >
                    <p>{expItem.date}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className={`flex w-full h-full  items-center justify-between px-20 transition-all duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-[17.5rem] h-[25rem] rounded-2xl relative overflow-hidden shadow-card bg-pink-1 items-center flex justify-center ">
            image
          </div>
          <div className="w-[35rem] h-full  flex items-center justify-center text-pink-1">
            <div className="flex-col space-y-5">
              <p className="text-[2rem]">{experience[activeButton].title}</p>
              <p>{experience[activeButton].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBody;
