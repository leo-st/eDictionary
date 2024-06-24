import LexiconWord from "../types/LexiconWord";

const ConjugationDetailEdit: React.FC<{
  word: LexiconWord;
}> = ({ word }) => {
    return (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Infinitive
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="infinitive"
              type="text"
              defaultValue={
                word.conjugationLexicons.length > 0
                  ? word.conjugationLexicons[0].conjugation.infinite
                  : ""
              }
            />
          </div>
      
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Singular 1
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="singular1"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.singular1
                    : ""
                }
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Plural 1
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="singular2"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.plural1
                    : ""
                }
              />
            </div>
          </div>
      
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Singular 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="singular3"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.singular2
                    : ""
                }
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Plural 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="plural1"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.plural2
                    : ""
                }
              />
            </div>
          </div>
      
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Singular 3
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="plural2"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.singular3
                    : ""
                }
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Plural 3
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="plural3"
                type="text"
                defaultValue={
                  word.conjugationLexicons.length > 0
                    ? word.conjugationLexicons[0].conjugation.plural3
                    : ""
                }
              />
            </div>
          </div>
        </>
      );
};

export default ConjugationDetailEdit;
