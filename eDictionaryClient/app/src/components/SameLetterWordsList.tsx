import React, { useState } from "react";
//import LexiconListProps from "../types/props/LexiconListProps";
import ModalContent from "./ModalContent";
import LexiconWord from "../types/LexiconWord";

const SameLetterWordsList: React.FC<{words:LexiconWord[]; onEditSubmit: (word: LexiconWord) => void}> = ({ words,  onEditSubmit }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [wordDetail, setWordDetail] = useState<LexiconWord>();

  function handleClickDetail(word: LexiconWord) {
    setShowModal(true);
    setWordDetail(word);
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
            <div className="text-white font-bold" onClick={() => handleClickDetail(word)}>
              {word.word}
            </div>
          </li>
        ))}
        <li></li>
      </ul>
      {showModal && wordDetail && (
              <ModalContent onClose={() => setShowModal(false)}  word={wordDetail} onEditSubmit={onEditSubmit}/>
            )}
    </div>
  );
};

export default SameLetterWordsList;
