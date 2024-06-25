import React from 'react';
import { Conjugation } from '../types/LexiconWord'; // Adjust the import path as needed

interface Props {
  conjugation: Conjugation | null;
  onUpdateConjugation: (conjugation: Conjugation) => void;
}

const ConjugationDetailEdit: React.FC<Props> = ({ conjugation, onUpdateConjugation }) => {
  const handleConjugationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    onUpdateConjugation({
      ...conjugation,  // Spread the existing conjugation properties
      [id]: value  // Update the specific property with new value
    } as Conjugation);  // Assert that the result is of type Conjugation
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Infinitive
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="infinite"
          type="text"
          defaultValue={conjugation?.infinite}
          onChange={handleConjugationChange}
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
            defaultValue={conjugation?.singular1}
            onChange={handleConjugationChange}
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Plural 1
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="plural1"
            type="text"
            defaultValue={conjugation?.plural1}
            onChange={handleConjugationChange}
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
            id="singular2"
            type="text"
            defaultValue={conjugation?.singular2}
            onChange={handleConjugationChange}
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Plural 2
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="plural2"
            type="text"
            defaultValue={conjugation?.plural2}
            onChange={handleConjugationChange}
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
            id="singular3"
            type="text"
            defaultValue={conjugation?.singular3}
            onChange={handleConjugationChange}
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
            defaultValue={conjugation?.plural3}
            onChange={handleConjugationChange}
          />
        </div>
      </div>
    </>
  );
};

export default ConjugationDetailEdit;
