const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
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
  synonyms: {
    type: [String],
    trim: true,
    default: [''],
  },
  antonyms: {
    type: [String],
    trim: true,
    default: [''],
  },
  partOfSpeech: {
    type: String,
    enum: [
      'noun',
      'adjective',
      'verb',
      'adverb',
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
  genitiveForm: {
    type: String,
  },
  // adjective and adverb
  comparativeForm: {
    type: {
      comparative: String,
      superlative: String,
    },
  },
});

WordSchema.index({ word: 1, partOfSpeech: 1 }, { unique: true });

module.exports = mongoose.model('Word', WordSchema);
