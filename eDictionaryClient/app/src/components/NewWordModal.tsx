import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LexiconWord, { WordType } from "../types/LexiconWord";
import {fetchAllWordTypes, addNewWord} from '../http';
import WordAdd from "./WordAdd";


const NewWordModal: React.FC<{ onClose: () => void; onAddSubmit: (word: LexiconWord) => void }> = ({
  onClose,
  onAddSubmit
}) => {
    const defaultEmptyWordType: WordType = {
        id: 0,
        name: 'Nouns',
        description: '',
        example: ''
      };

    const emptyWord: LexiconWord = {
        id: 0,
        word: '',
        translation: '',
        wordType: defaultEmptyWordType, // Set a default WordType if needed
        firstLetter: '',
        description: '',
        contextExample: '',
        genderWords: null,
        conjugation: null,
      };

  const portalDiv = document.getElementById("modal")!;
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [wordTypes, setWordTypes] = useState<WordType[]>([]);


  useEffect(() => {
    async function fetchWordTypes(){
      //setIsFetching(true);
      try{
        const lexiconWords = await fetchAllWordTypes();
        setWordTypes(lexiconWords);
        
      }
      catch(error){
        console.log(error)
      }
      //setIsFetching(false);
    }
    fetchWordTypes();
  }, [])

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Handle the "Esc" key press here
        onClose();
      }
    };


    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  async function handleFormSubmit(word: LexiconWord){
    try {
      await addNewWord(word);
      onAddSubmit(word);
    } catch (error) {
      console.error('Failed to update word:', error);
      // Handle error state or feedback to user
    }
  }

  return createPortal(
    <dialog ref={dialogRef}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="m-8 text-black">
            <WordAdd word={emptyWord} possibleWordTypes={wordTypes} onCloseDialog={onClose} onEditSubmit={handleFormSubmit}/>
            <button onClick={onClose}>Close</button>
          </div>
      </div>
    </dialog>,
    portalDiv
  );
};

export default NewWordModal;
