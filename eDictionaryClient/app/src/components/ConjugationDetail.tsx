import LexiconWord from "../types/LexiconWord";

const ConjugationDetail: React.FC<{
  word: LexiconWord;
}> = ({  word }) => {
  return (
    <div>
      <ul>
        {word.conjugationLexicons.map((conjug) => (
          <li key={conjug.conjugationId}>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Singular 1: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.singular1}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Singular 2: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.singular2}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Singular 3: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.singular3}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Plural 1: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.plural1}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Plural 2: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.plural2}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Plural 3: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.plural3}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/8 text-black p-4">Infinitive: </div>
              <div className="w-1/8 font-bold text-black p-4">
                {conjug.conjugation.infinite}
              </div>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default ConjugationDetail;
