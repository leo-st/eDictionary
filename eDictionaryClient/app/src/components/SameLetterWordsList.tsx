import React, { useState } from "react";
import LexiconListProps from "../types/props/LexiconListProps";
import ModalContent from "./ModalContent";

const SameLetterWordsList: React.FC<LexiconListProps> = ({ words }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleClickDetail() {
    setShowModal(true);
  }
  return (
    <div
      className="m-8 text-white"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (showModal === true && !target.classList.contains('modal')) {
          setShowModal(false);
        }
      }}
    >
      <ul>
        {words.map((word) => (
          <li key={word.id}>
            <div className="text-white font-bold" onClick={handleClickDetail}>
              {word.word}
            </div>
            {showModal && (
              <ModalContent onClose={() => setShowModal(false)} word={word} />
            )}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default SameLetterWordsList;
