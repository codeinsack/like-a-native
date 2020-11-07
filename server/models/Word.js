const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true,
    trim: true,
  },
  translation: {
    type: String,
    trim: true,
  },
  definitions: {
    type: [String],
    trim: true,
    default: [''],
  },
  examples: {
    type: [String],
    trim: true,
    default: [''],
  },
  partOfSpeech: {
    type: String,
    enum: [
      '',
      'noun',
      'article',
      'adjective',
      'pronoun',
      'numeral',
      'verb',
      'adverb',
      'preposition',
      'conjunction',
      'interjection',
    ],
  },
  // verb
  verbForm: {
    type: {
      thirdPerson: String,
      pastSimple: String,
      pastParticiple: String,
    },
  },
  // noun
  article: {
    type: String,
    enum: [
      '',
      'der',
      'die',
      'das',
    ],
    required: false,
  },
  pluralForm: {
    type: String,
  },
});

module.exports = mongoose.model('Word', WordSchema);
