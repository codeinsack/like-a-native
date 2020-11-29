export enum PartOfSpeech {
  noun = 'noun',
  adjective = 'adjective',
  verb = 'verb',
  adverb = 'adverb',
}

interface VerbForm {
  thirdPerson: string;
  pastSimple: string;
  pastParticiple: string;
}

interface ComparativeForm {
  comparative: string;
  superlative: string;
}

export enum Article {
  der = 'der',
  die = 'die',
  das = 'das',
}

export interface Word {
  _id?: string;
  word: string;
  translation: string;
  definitions: Array<string>;
  examples: Array<string>;
  synonyms: Array<string>;
  antonyms: Array<string>;
  partOfSpeech: PartOfSpeech | string;
  verbForm: VerbForm;
  article: Article | string;
  pluralForm: string;
  genitiveForm: string;
  comparativeForm: ComparativeForm;
}

export interface AttachedWord {
  word: Word;
  _id: string;
  learningProgress: number;
}
