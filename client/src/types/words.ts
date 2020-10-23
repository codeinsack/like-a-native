export enum PartOfSpeech {
  NOUN = 'NOUN',
  ARTICLE = 'ARTICLE',
  ADJECTIVE = 'ADJECTIVE',
  PRONOUN = 'PRONOUN',
  NUMERAL = 'NUMERAL',
  VERB = 'VERB',
  ADVERB = 'ADVERB',
  PREPOSITION = 'PREPOSITION',
  CONJUNCTION = 'CONJUNCTION',
  INTERJECTION = 'INTERJECTION',
}

export interface Word {
  word: string;
  translation: string;
  definition: string;
  partOfSpeech: PartOfSpeech;
}
