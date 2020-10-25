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
    ]
  },
  form: {
    type: {
      thirdPerson: String,
      pastSimple: String,
      pastParticiple: String,
    }
  },
})

module.exports = mongoose.model('Word', WordSchema);
