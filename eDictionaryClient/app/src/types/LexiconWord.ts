export interface WordType{
  id: number;
  name: string;
  description: string;
  example: string;
}


export interface GenderWords{
  lexicon_id: number;
  musculine: string;
  feminine: string;
  neutral: string;
  
}

export interface Conjugation{
  lexicon_id: number;
  singular1: string;
  singular2: string;
  singular3: string;
  plural1: string;
  plural2: string;
  plural3: string;
  infinite: string;
}
interface LexiconWord {
    id: number;
    word: string;
    translation: string;
    wordType: WordType;
    firstLetter: string;
    description: string;
    contextExample: string;
    genderWords: GenderWords | null;
    conjugation: Conjugation | null;
  }

export default LexiconWord;