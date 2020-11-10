const mongoose = require('mongoose');

const AttachedWords = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    select: false,
    required: true,
  },
  word: {
    type: mongoose.Schema.ObjectId,
    ref: 'Word',
    required: true,
  },
});

AttachedWords.index({ user: 1, word: 1 }, { unique: true });

module.exports = mongoose.model('AttachedWords', AttachedWords);
