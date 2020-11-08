const mongoose = require('mongoose');

const AttachedWords = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    select: false,
  },
  word: {
    type: mongoose.Schema.ObjectId,
    ref: 'Word',
    unique: true,
  },
});

module.exports = mongoose.model('AttachedWords', AttachedWords);
