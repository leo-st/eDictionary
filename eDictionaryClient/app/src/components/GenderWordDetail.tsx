import LexiconWord from "../types/LexiconWord";

const GenderWordDetail: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
  return (
    <div>
      <ul>
        {word.genderWordsLexicons.map((gword) => (
          <li key={gword.genderWordsId}>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Musculine: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {gword.genderWords.musculine}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Feminine: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {gword.genderWords.feminine}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Neutral: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {gword.genderWords.neutral}
              </div>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default GenderWordDetail;
