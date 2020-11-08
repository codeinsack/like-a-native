const express = require('express');

const {
  getAttachedWords,
  attachWord,
  detachWord,
} = require('../controllers/attachedWords');
const { protect } = require('../middleware/auth');
const { addUserToQuery } = require('../middleware/addUserToQuery');

const advancedResults = require('../middleware/advancedResults');
const AttachedWords = require('../models/AttachedWords');

const router = express.Router();

router.route('/')
  .get(protect, addUserToQuery(), advancedResults(AttachedWords, '', 'word'), getAttachedWords);

router.route('/:id')
  .post(protect, attachWord)
  .delete(protect, detachWord);

module.exports = router;
