import React, { useState } from "react";
import LexiconWord from "../types/LexiconWord";

const WordDetail: React.FC<LexiconWord> = ({ ...word }) => {
  const [detailIsVisible, setDetailIsVisible] = useState<boolean>(false);

  function detailsIsVisibleHandler() {
    setDetailIsVisible(!detailIsVisible);
  }
  return (
    <div className="m-8 text-white">
      {detailIsVisible === false ? (
        <h3 onClick={detailsIsVisibleHandler} className="font-bold">{word.word}</h3>
      ) : null}
      {detailIsVisible === true ? (
        <div>
          <h3 onClick={detailsIsVisibleHandler} className="font-bold">{word.word}</h3>
          <div className="flex">
            <div className="w-1/8 text-white p-4">Translation: </div>
            <div className="w-1/8 font-bold text-white p-4">
              {word.translation}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-white p-4">Article: </div>
            <div className="w-1/8 font-bold text-white p-4">
              {word.article}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-white p-4">Description: </div>
            <div className="w-1/8 font-bold text-white p-4">
              {word.description}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-white p-4">Example: </div>
            <div className="w-1/8 font-bold text-white p-4">
              {word.contextExample}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WordDetail;
