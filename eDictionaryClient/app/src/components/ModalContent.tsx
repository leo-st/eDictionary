import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LexiconWord, { WordType } from "../types/LexiconWord";
import ConjugationDetail from "./ConjugationDetail";
import GenderWordDetail from "./GenderWordDetail";
import WordInfo from "./WordInfo";
import WordInfoEdit from "./WordInfoEdit";
import {editWord, fetchAllWordTypes} from '../http';

const ModalContent: React.FC<{ onClose: () => void; word: LexiconWord; onEditSubmit: (word: LexiconWord) => void }> = ({
  onClose,
  word,
  onEditSubmit
}) => {
  const portalDiv = document.getElementById("modal")!;
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [openedDetails, setOpenedDetails] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [wordTypes, setWordTypes] = useState<WordType[]>([]);

  function openDetails() {
    setOpenedDetails(!openedDetails);
  }

  function handleEditing() {
    setIsEdited(!isEdited);
  }

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
      await editWord(word);
      onEditSubmit(word);
    } catch (error) {
      console.error('Failed to update word:', error);
      // Handle error state or feedback to user
    }
  }

  return createPortal(
    <dialog ref={dialogRef}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!isEdited ? (
          <div className="m-8 text-black">
            <button onClick={handleEditing}>Edit</button>
            <WordInfo word={word} />
            {word.wordType.id === 1 || word.wordType.id === 3 ? (
              <div>
                <button onClick={openDetails}>Toggle Details</button>
              </div>
            ) : undefined}
            {openedDetails && word.wordType.id === 1 ? (
              <GenderWordDetail word={word} />
            ) : undefined}
            {openedDetails && word.wordType.id === 3 ? (
              <ConjugationDetail word={word} />
            ) : undefined}

            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className="m-8 text-black">
            <WordInfoEdit word={word} possibleWordTypes={wordTypes} onCloseDialog={onClose} onEditSubmit={handleFormSubmit}/>


            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </dialog>,
    portalDiv
  );
};

export default ModalContent;
