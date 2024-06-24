export interface WordType{
  id: number;
  name: string;
  description: string;
  example: string;
}


interface GenderWords{
  id: number;
  musculine: string;
  feminine: string;
  neutral: string;
  
}
interface GenderWordsLexicons{
  genderWordsId: number;
  genderWords: GenderWords;
}

interface Conjugation{
  id: number;
  singular1: string;
  singular2: string;
  singular3: string;
  plural1: string;
  plural2: string;
  plural3: string;
  infinite: string;
}

interface conjugationLexicons{
  conjugationId: number;
  conjugation: Conjugation;
}
interface LexiconWord {
    id: number;
    word: string;
    translation: string;
    wordType: WordType;
    firstLetter: string;
    description: string;
    contextExample: string;
    genderWordsLexicons: GenderWordsLexicons[];
    conjugationLexicons: conjugationLexicons[];
  }

export default LexiconWord;