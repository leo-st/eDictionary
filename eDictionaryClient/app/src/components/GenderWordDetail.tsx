import LexiconWord from "../types/LexiconWord";

const GenderWordDetail: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Musculine: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.genderWords?.musculine}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Feminine: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.genderWords?.feminine}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Neutral: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.genderWords?.neutral}
        </div>
      </div>
    </div>
  );
};

export default GenderWordDetail;
