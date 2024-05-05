import React from "react";
import LetterCardProps from "../../types/props/LetterCardProps";


const LetterCard: React.FC<LetterCardProps> = ({letter}) => {
  return (
    <div className="flex items-center justify-center h-12 w-12 bg-gray-800 text-slate-400 hover:text-white text-2xl font-bold m-4">
      {letter}
    </div>
  );
};

export default LetterCard;
