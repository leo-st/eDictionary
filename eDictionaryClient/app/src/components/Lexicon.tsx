import React from "react";
import LetterCard from "./UI/LetterCard";
import { useEffect, useState } from "react";
import { fetchAllWords } from "../http";
import LexiconWord from "../types/LexiconWord";
import SameLetterWordsList from "./SameLetterWordsList";
import NewWordModal from "./NewWordModal";

const GERMAN_ALPHABET = [
  { letter: "A", col_number: 1, name: "ah" },
  { letter: "B", col_number: 1, name: "bay" },
  { letter: "C", col_number: 1, name: "tsay" },
  { letter: "D", col_number: 1, name: "day" },
  { letter: "E", col_number: 1, name: "eh" },
  { letter: "F", col_number: 1, name: "eff" },
  { letter: "G", col_number: 1, name: "gay" },
  { letter: "H", col_number: 1, name: "hah" },
  { letter: "I", col_number: 1, name: "ee" },
  { letter: "J", col_number: 2, name: "yot" },
  { letter: "K", col_number: 2, name: "kah" },
  { letter: "L", col_number: 2, name: "ell" },
  { letter: "M", col_number: 2, name: "emm" },
  { letter: "N", col_number: 2, name: "enn" },
  { letter: "O", col_number: 2, name: "oh" },
  { letter: "P", col_number: 2, name: "pay" },
  { letter: "Q", col_number: 2, name: "koo" },
  { letter: "R", col_number: 2, name: "air" },
  { letter: "S", col_number: 3, name: "ess" },
  { letter: "T", col_number: 3, name: "tay" },
  { letter: "U", col_number: 3, name: "oo" },
  { letter: "V", col_number: 3, name: "fow" },
  { letter: "W", col_number: 3, name: "vay" },
  { letter: "X", col_number: 3, name: "eeks" },
  { letter: "Y", col_number: 3, name: "oop-si-lohn" },
  { letter: "Z", col_number: 3, name: "tset" },
];

const Lexicon: React.FC = () => {
  const [lexiconWordsState, setLexiconWords] = useState<LexiconWord[]>([]);

  useEffect(() => {
    async function fetchLexiconWords() {
      //setIsFetching(true);
      try {
        const lexiconWords = await fetchAllWords();
        setLexiconWords(lexiconWords);
      } catch (error) {
        console.log(error);
      }
      //setIsFetching(false);
    }
    fetchLexiconWords();
  }, []);

  function handleEditSubmit(word: LexiconWord) {
    setLexiconWords((prevWords) =>
      prevWords.map((existingWord) =>
        existingWord.id === word.id ? word : existingWord
      )
    );
  }

  function handleAddNewWord(word: LexiconWord) {
    setLexiconWords(prevWords => [...prevWords, word]);
  }

  const [showModalNewWord, setShowModalNewWord] = useState(false);

  function handleShowModalNewWord(){
    setShowModalNewWord(!showModalNewWord);
  }

  return (
    <div>
      <h2>German Alphabet</h2>
      <div className="rtl">
      <button className="top-0 right-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleShowModalNewWord}>
        Add New Word
      </button>
      </div>
      {showModalNewWord && <NewWordModal onClose={handleShowModalNewWord} onAddSubmit={handleAddNewWord}/>}
      
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((col_number) => (
          <div key={`col-${col_number}`} className="col-span-1">
            {GERMAN_ALPHABET.filter(
              (item) => item.col_number === col_number
            ).map((item) => (
              <div key={item.letter}>
                <LetterCard letter={item.letter} />
                <SameLetterWordsList
                  words={lexiconWordsState.filter(
                    (word) =>
                      word.firstLetter.toUpperCase() ===
                      item.letter.toUpperCase()
                  )}
                  onEditSubmit={handleEditSubmit}
                />
                {/* {item.letter} - {item.name}
                <div>
                    <p>word</p>
                    <p>translation</p>
                </div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lexicon;
