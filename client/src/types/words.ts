export enum PartOfSpeech {
  noun = 'noun',
  article = 'article',
  adjective = 'adjective',
  pronoun = 'pronoun',
  numeral = 'numeral',
  verb = 'verb',
  adverb = 'adverb',
  preposition = 'preposition',
  conjunction = 'conjunction',
  interjection = 'interjection',
}

interface VerbForm {
  thirdPerson: string;
  pastSimple: string;
  pastParticiple: string;
}

export interface Word {
  _id: string;
  word: string;
  translation: string;
  definition: string;
  partOfSpeech: PartOfSpeech;
  form: VerbForm;
}
