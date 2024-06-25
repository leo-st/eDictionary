import LexiconWord, { WordType } from "./types/LexiconWord";

export async function fetchAllWords(): Promise<LexiconWord[]> {
  const response = await fetch("https://localhost:7275/Dictionary/GetAllWords");
  const resData: LexiconWord[] = await response.json();
  if (!response.ok) {
    console.log("ne valja");
    throw new Error("Failed to fetch user places");
  }

  return resData;
}

export async function fetchAllWordTypes(): Promise<WordType[]> {
  const response = await fetch("https://localhost:7275/Dictionary/GetAllWordTypes", {method: 'POST'});
  const resData: WordType[] = await response.json();
  if (!response.ok) {
    console.log("ne valja");
    throw new Error("Failed to fetch word types");
  }

  return resData;
}

export async function editWord(word: LexiconWord) {
  // Create the payload based on the expected API structure
  const payload: any = {
    description: word.description,
    contextExample: word.contextExample,
    id: word.id,
    translation: word.translation,
    wordTypeId: word.wordType.id
  };
  
  // Add genderWordsModel if word.genderWords is not null
  if (word.genderWords !== null) {
    payload.genderWordsModel = {
      musculine: word.genderWords.musculine,
      feminine: word.genderWords.feminine,
      neutral: word.genderWords.neutral
    };
  }
  
  // Add conjugationModel if word.conjugation is not null
  if (word.conjugation !== null) {
    payload.conjugationModel = {
      singular1: word.conjugation.singular1,
      singular2: word.conjugation.singular2,
      singular3: word.conjugation.singular3,
      plural1: word.conjugation.plural1,
      plural2: word.conjugation.plural2,
      plural3: word.conjugation.plural3,
      infinite: word.conjugation.infinite
    };
  }

  const response = await fetch("https://localhost:7275/Dictionary/EditWord", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    console.log("ne valja");
    throw new Error("Failed to fetch word types");
  }
}

