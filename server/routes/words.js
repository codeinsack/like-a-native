const express = require('express');
const {
  getWords,
  addWord,
  wordImageUpload,
} = require('../controllers/words');

const Word = require('../models/Word');

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");

router.route('/')
  .get(advancedResults(Word), getWords)
  .post(addWord);

router.route('/:id/image').put(wordImageUpload);

module.exports = router;
