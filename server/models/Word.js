const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: [true, 'Please add a word'],
    unique: true,
    trim: true,
  },
  translation: {
    type: String,
    required: [true, 'Please add a translation'],
    unique: true,
    trim: true,
  },
  definition: {
    type: String,
    required: [true, 'Please add a definition'],
    trim: true,
  },
  partOfSpeech: {
    type: String,
    required: [true, 'Please add a part of speech'],
    enum: [
      'NOUN',
      'ARTICLE',
      'ADJECTIVE',
      'PRONOUN',
      'NUMERAL',
      'VERB',
      'ADVERB',
      'PREPOSITION',
      'CONJUNCTION',
      'INTERJECTION',
    ]
  },
  image: {
    type: String,
    default: 'no-image.png',
  },
})

module.exports = mongoose.model('Word', WordSchema);
