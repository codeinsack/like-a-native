const asyncHandler = require('../middleware/async');
const Word = require('../models/Word');

// @desc   Get all words
// @route  GET /api/v1/words
// @access Public
exports.getWords = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc   Add new word
// @route  POST /api/v1/words
// @access Public
exports.addWord = asyncHandler(async (req, res, next) => {
  const word = await Word.create(req.body);
  res.status(201).json({
    success: true,
    data: word,
  })
});
