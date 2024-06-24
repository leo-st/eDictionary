import LexiconWord from "../types/LexiconWord";

const GenderWordDetailEdit: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
    
  return (
    <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Musculine
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="translation"
                type="text"
                defaultValue={word.genderWordsLexicons.length>0 ? word.genderWordsLexicons[0].genderWords.musculine : ''}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Feminine
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="translation"
                type="text"
                defaultValue={word.genderWordsLexicons.length>0 ? word.genderWordsLexicons[0].genderWords.feminine : ''}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Neutral
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="translation"
                type="text"
                defaultValue={word.genderWordsLexicons.length>0 ? word.genderWordsLexicons[0].genderWords.neutral : ''}
              />
            </div>
    </>
  );
};

export default GenderWordDetailEdit;
