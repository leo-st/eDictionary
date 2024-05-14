import React, { useState } from "react";
import LexiconListProps from "../types/props/LexiconListProps";
//import WordDetail from "./WordDetail";
import ModalContent from "./ModalContent";

const SameLetterWordsList: React.FC<LexiconListProps> = ({ words }) => {
  const [showModal, setShowModal] = useState(false);

  function  handleClickDetail() {
    setShowModal(true);
  }
  return (
    <div className="m-8 text-white">
        <ul>
            {words.map((word) => (
                <li key={word.id}>
                    <div className="text-white font-bold" onClick={handleClickDetail}>
                      {word.word}
                    </div>
                    {/* <WordDetail {...word} /> */}
                    {showModal && <ModalContent onClose={() => setShowModal(false)} word={word}/>}
                </li>
            ))}
            <li></li>
        </ul>
    </div>
  );
};

export default SameLetterWordsList;
