import React from "react";
import LetterCard from "./UI/LetterCard";
import { useEffect, useState } from "react";
import {fetchAllWords} from '../http';
import LexiconWord from "../types/LexiconWord";
import SameLetterWordsList from "./SameLetterWordsList";

const GERMAN_ALPHABET = [
  { letter: "A", name: "ah" },
  { letter: "B", name: "bay" },
  { letter: "C", name: "tsay" },
  { letter: "D", name: "day" },
  { letter: "E", name: "eh" },
  { letter: "F", name: "eff" },
  { letter: "G", name: "gay" },
  { letter: "H", name: "hah" },
  { letter: "I", name: "ee" },
  { letter: "J", name: "yot" },
  { letter: "K", name: "kah" },
  { letter: "L", name: "ell" },
  { letter: "M", name: "emm" },
  { letter: "N", name: "enn" },
  { letter: "O", name: "oh" },
  { letter: "P", name: "pay" },
  { letter: "Q", name: "koo" },
  { letter: "R", name: "air" },
  { letter: "S", name: "ess" },
  { letter: "T", name: "tay" },
  { letter: "U", name: "oo" },
  { letter: "V", name: "fow" },
  { letter: "W", name: "vay" },
  { letter: "X", name: "eeks" },
  { letter: "Y", name: "oop-si-lohn" },
  { letter: "Z", name: "tset" },
];

const Lexicon: React.FC = () => {

  const [lexiconWordsState, setLexiconWords] = useState<LexiconWord[]>([]);

  useEffect(() => {
    async function fetchLexiconWords(){
      //setIsFetching(true);
      try{
        const lexiconWords = await fetchAllWords();
        setLexiconWords(lexiconWords);
      }
      catch(error){
        console.log(error)
      }
      //setIsFetching(false);
    }
    fetchLexiconWords();
  }, [])

  return (
    <div>
      <h2>German Alphabet</h2>
      <ul>
        {GERMAN_ALPHABET.map((item) => (
          <li key={item.letter}>
            <LetterCard letter={item.letter}/>
            <SameLetterWordsList words={lexiconWordsState.filter(word => word.firstLetter.toUpperCase()===item.letter.toUpperCase())} />
            {/* {item.letter} - {item.name}
            <div>
                <p>word</p>
                <p>translation</p>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lexicon;
