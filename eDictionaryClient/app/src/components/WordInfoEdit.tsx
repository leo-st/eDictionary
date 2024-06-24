import { useState } from "react";
import LexiconWord, { WordType } from "../types/LexiconWord";
import GenderWordDetailEdit from "./GenderWordDetailEdit";
import ConjugationDetailEdit from "./ConjugationDetailEdit";

const WordInfoEdit: React.FC<{
  word: LexiconWord;
  possibleWordTypes: WordType[];
}> = ({ word, possibleWordTypes }) => {
  const [selectedWordType, setSelectedWordType] = useState<string>(word.wordType.name);
  const handleWordTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWordType(event.target.value);
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Translation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="translation"
            type="text"
            value={word.translation}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Word Type
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state" value={selectedWordType} onChange={handleWordTypeChange}
            >
              {possibleWordTypes.map((wordType) => (
                <option key={wordType.id}>{wordType.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="translation"
            type="text"
            value={word.description}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Example
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="translation"
            type="text"
            value={word.contextExample}
          />
        </div>

        {selectedWordType === "Nouns" ? 
        <GenderWordDetailEdit word={word} /> : undefined}

        {selectedWordType === "Verbs" ? 
        <ConjugationDetailEdit word={word} /> : undefined}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Update
          </button>
        </div>

        

      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default WordInfoEdit;
