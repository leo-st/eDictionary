import React from "react";
import LexiconListProps from "../types/props/LexiconListProps";
import WordDetail from "./WordDetail";
const SameLetterWordsList: React.FC<LexiconListProps> = ({ words }) => {
  return (
    <div className="m-8 text-white">
        <ul>
            {words.map((word) => (
                <li key={word.id}>
                    <WordDetail {...word} />
                </li>
            ))}
            <li></li>
        </ul>
    </div>
  );
};

export default SameLetterWordsList;
