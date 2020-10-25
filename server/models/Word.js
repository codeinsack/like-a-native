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
  definition: {
    type: String,
    trim: true,
  },
  partOfSpeech: {
    type: String,
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
  },
})

module.exports = mongoose.model('Word', WordSchema);
