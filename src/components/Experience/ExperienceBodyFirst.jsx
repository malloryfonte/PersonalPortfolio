import React, { useState } from "react";
import { experience } from "../../constants";
import ArrowButton from "../HomeConnect/ArrowButton";

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
    <div className="w-[1024px] flex flex-col items-center bg-black-1">
      <div className=" w-[974px] h-full flex relative justify-center border-l-[3px] border-black-1 ">
        <div className="absolute top-0 left-0 h-full flex flex-col justify-evenly translate-x-[-50%]">
          {experience.map((expItem) => (
            <button
              key={expItem.id}
              className={`w-[50px] h-[50px] bg-black-1 border-[3px] border-black-1 rounded-3xl flex items-center justify-center transition-all duration-400 ease-in-out ${
                activeButton === expItem.id
                  ? "text-pink-1 bg-pink-1"
                  : "text-black-1"
              }`}
              onClick={() => handleButtonClick(expItem.id)}
            ></button>
          ))}
        </div>
        <div className="w-full h-full ">
          <p className="text-[2rem]">hihihihihihi</p>
        </div>

        {/* <div className="absolute top-0 left-0 h-full flex flex-col justify-evenly translate-x-[-50%]">
          {experience.map((expItem) => (
            <button
              key={expItem.id}
              className={`w-[50px] h-[50px] bg-black-1 border-[4px] border-black-1 rounded-3xl flex items-center justify-center transition-all duration-400 ease-in-out ${
                activeButton === expItem.id
                  ? "text-pink-1 bg-pink-1"
                  : "text-black-1"
              }`}
              onClick={() => handleButtonClick(expItem.id)}
            >
              <div className="w-full  h-full flex-col  space-y-[10px] mr-[250px] mb-10">
                <div className=" flex items-center justify-center ">
                  <p className="text-[1.5rem] whitespace-nowrap">
                    {expItem.buttontitle}
                  </p>
                </div>
                <div className="flex items-center justify-center ">
                  <div
                    className={`w-[150px] h-[30px] border-2 p-2 flex items-center justify-center rounded-3xl ${
                      activeButton === expItem.id
                        ? "border-pink-1"
                        : "border-black-1"
                    }`}
                  >
                    <p>{expItem.date}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div> */}
        {/* <div
          className={`flex w-full h-full  items-center justify-center gap-x-10 px-20 transition-all duration-1000 ease-in-out  ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-[20rem] h-[20rem] rounded-full relative overflow-hidden shadow-card bg-pink-1 items-center flex justify-center ">
            image
          </div>
          <div className="w-[35rem] h-full  flex items-center justify-center text-pink-1">
            <div className="flex-col space-y-5">
              <p className="text-[2rem]">{experience[activeButton].title}</p>
              <p>{experience[activeButton].description}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ExperienceBody;
