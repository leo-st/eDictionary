import LexiconWord from "../types/LexiconWord";

const ConjugationDetail: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Singular 1: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.singular1}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Singular 2: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.singular2}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Singular 3: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.singular3}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Plural 1: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.plural1}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Plural 2: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.plural2}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Plural 3: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.plural3}
        </div>
      </div>
      <div className="flex">
        <div className="w-1/8 text-black p-4">Infinitive: </div>
        <div className="w-1/8 font-bold text-black p-4">
          {word.conjugation?.infinite}
        </div>
      </div>
    </div>
  );
};

export default ConjugationDetail;
