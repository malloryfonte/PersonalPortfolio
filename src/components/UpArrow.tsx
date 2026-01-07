import { ArrowUp } from "lucide-react";
import React from "react";

interface UpArrowProps {
  dark?: boolean;
}
const UpArrow = ({ dark }: UpArrowProps) => {
  const handleUpClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className={`fixed bottom-5 right-5 ${
        dark ? "text-blue-light" : "text-blue-dark"
      } hover:text-pink-1`}
      onClick={handleUpClick}
    >
      <ArrowUp size={36} />
    </button>
  );
};

export default UpArrow;
