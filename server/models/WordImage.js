const mongoose = require('mongoose');

const WordImage = new mongoose.Schema({
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  word: {
    type: mongoose.Schema.ObjectId,
    ref: 'Word',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('WordImage', WordImage);
