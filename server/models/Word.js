const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
  },
  translation: {
    type: String,
    required: [true, 'Please add a translation'],
    unique: true,
    trim: true,
  },
})

module.exports = mongoose.model('Word', WordSchema);
