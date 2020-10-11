const express = require('express');
const {
  getWords,
  addWord,
} = require('../controllers/words');

const Word = require('../models/Word');

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");

router.route('/')
  .get(advancedResults(Word), getWords)
  .post(addWord);

module.exports = router;
