import LexiconWord from "../types/LexiconWord";

const WordInfo: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Translation: </div>
        <div className="w-1/8 font-bold text-black p-4">{word.translation}</div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Word Type: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.wordType.name}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Description: </div>
        <div className="w-1/8 font-bold text-black p-4">{word.description}</div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Example: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.contextExample}
        </div>
      </div>
    </div>
  );
};

export default WordInfo;
