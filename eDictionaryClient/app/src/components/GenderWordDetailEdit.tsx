import React from 'react';
import { GenderWords } from '../types/LexiconWord'; // Adjust the import path as needed

interface Props {
  genderWords: GenderWords | null;
  onUpdateGenderWords: (genderWords: GenderWords) => void;
}

const GenderWordDetailEdit: React.FC<Props> = ({ genderWords, onUpdateGenderWords }) => {
  const handleGenderWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    onUpdateGenderWords({
      ...genderWords,  // Spread the existing conjugation properties
      [id]: value  // Update the specific property with new value
    } as GenderWords);  // Assert that the result is of type Conjugation
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Musculine
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="musculine"
          type="text"
          defaultValue={genderWords?.musculine}
          onChange={handleGenderWordsChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Feminine
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feminine"
          type="text"
          defaultValue={genderWords?.feminine}
          onChange={handleGenderWordsChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Neutral
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="neutral"
          type="text"
          defaultValue={genderWords?.neutral}
          onChange={handleGenderWordsChange}
        />
      </div>
    </>
  );
};

export default GenderWordDetailEdit;
