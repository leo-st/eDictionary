import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import LexiconWord from "../types/LexiconWord";

const ModalContent: React.FC<{onClose: () => void , word: LexiconWord}> = ({ onClose, word }) =>{
  const portalDiv = document.getElementById('modal')!;
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if(dialogRef.current){
      dialogRef.current.showModal();
    }
    
  }, []);

  return createPortal(
    <dialog ref={dialogRef}>
      {/* <div className="modal">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div> */}
      {/* <div>
      {word.translation}
      </div> */}
      <div className="modal">
      <div className="m-8 text-black">
        <div>
          <div className="flex">
            <div className="w-1/8 text-black p-4">Translation: </div>
            <div className="w-1/8 font-bold text-black p-4">
              {word.translation}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-black p-4">Article: </div>
            <div className="w-1/8 font-bold text-black p-4">{word.article}</div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-black p-4">Description: </div>
            <div className="w-1/8 font-bold text-black p-4">
              {word.description}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/8 text-black p-4">Example: </div>
            <div className="w-1/8 font-bold text-black p-4">
              {word.contextExample}
            </div>
          </div>          
        </div>
        <button onClick={onClose}>Close</button>
    </div>
    </div>
    </dialog>,portalDiv
  );
}

export default ModalContent;