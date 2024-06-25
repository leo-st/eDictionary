import React, { useState } from 'react';
import LexiconWord, { WordType, GenderWords, Conjugation } from '../types/LexiconWord'; // Adjust the import path as needed
import { editWord } from '../http';
import GenderWordDetailEdit from './GenderWordDetailEdit'; // Adjust the import path as needed
import ConjugationDetailEdit from './ConjugationDetailEdit'; // Adjust the import path as needed

const WordInfoEdit: React.FC<{
  word: LexiconWord;
  possibleWordTypes: WordType[];
  onCloseDialog: () => void;
}> = ({ word, possibleWordTypes, onCloseDialog }) => {
  const [translation, setTranslation] = useState<string>(word.translation);
  const [selectedWordType, setSelectedWordType] = useState<string>(word.wordType.name);
  const [description, setDescription] = useState<string>(word.description);
  const [contextExample, setContextExample] = useState<string>(word.contextExample);
  const [genderWords, setGenderWords] = useState<GenderWords|null>(word.genderWords);
  const [conjugation, setConjugation] = useState<Conjugation|null>(word.conjugation);

  const handleTranslationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTranslation(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleContextExampleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContextExample(event.target.value);
  };

  const handleWordTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWordType(event.target.value);
  };

  const handleUpdateGenderWords = (updatedGenderWords: GenderWords) => {
    setGenderWords(updatedGenderWords);
  };

  const handleUpdateConjugation = (updatedConjugation: Conjugation) => {
    setConjugation(updatedConjugation);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedWordType = possibleWordTypes.find(wt => wt.name === selectedWordType);

    if (!updatedWordType) {
      console.error('Selected word type not found');
      return;
    }

    const updatedWord: LexiconWord = {
      ...word,
      translation,
      description,
      contextExample,
      wordType: updatedWordType,
      genderWords: selectedWordType === "Nouns" ? genderWords : null,
      conjugation: selectedWordType === "Verbs" ? conjugation: null,
    };

    try {
      await editWord(updatedWord);
      onCloseDialog();
    } catch (error) {
      console.error('Failed to update word:', error);
      // Handle error state or feedback to user
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Translation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="translation"
            type="text"
            value={translation}
            onChange={handleTranslationChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Word Type
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="wordType"
              value={selectedWordType}
              onChange={handleWordTypeChange}
            >
              {possibleWordTypes.map((wordType) => (
                <option key={wordType.id} value={wordType.name}>
                  {wordType.name}
                </option>
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
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Example
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contextExample"
            type="text"
            value={contextExample}
            onChange={handleContextExampleChange}
          />
        </div>

        {selectedWordType === "Nouns" && (
          <GenderWordDetailEdit genderWords={genderWords} onUpdateGenderWords={handleUpdateGenderWords} />
        )}

        {selectedWordType === "Verbs" && (
          <ConjugationDetailEdit conjugation={conjugation} onUpdateConjugation={handleUpdateConjugation} />
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCloseDialog}
          >
            Cancel
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024 Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default WordInfoEdit;
