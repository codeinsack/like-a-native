const express = require('express');
const {
  getWords,
  getWordDetails,
  addWord,
  updateWord,
} = require('../controllers/words');
const { protect, authorize } = require('../middleware/auth');

const Word = require('../models/Word');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

router.route('/')
  .get(protect, advancedResults(Word, 'word'), getWords)
  .post(protect, authorize('moderator', 'admin'), addWord)
  .put(protect, authorize('moderator', 'admin'), updateWord);

router.route('/:id')
  .get(getWordDetails);

module.exports = router;
