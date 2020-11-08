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

export enum Article {
  der = 'der',
  die = 'die',
  das = 'das',
}

export interface Word {
  _id: string;
  word: string;
  translation: string;
  definitions: Array<string>;
  examples: Array<string>;
  partOfSpeech: PartOfSpeech;
  form: VerbForm;
  article: Article;
  pluralForm: string;
}

export interface AttachedWord {
  word: Word;
  _id: string;
}
