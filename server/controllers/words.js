const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Word = require('../models/Word');

// @desc   Get all words
// @route  GET /api/v1/words
// @access Public
exports.getWords = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

// @desc   Get single word
// @route  GET /api/v1/words/:id
// @access Public
exports.getWordDetails = asyncHandler(async (req, res, next) => {
  const word = await Word.findById(req.params.id);
  if (!word) {
    return next(new ErrorResponse(`Word not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({
    content: word,
    status: 'success',
  });
});

// @desc   Add new word
// @route  POST /api/v1/words
// @access Public
exports.addWord = asyncHandler(async (req, res, next) => {
  try {
    const word = await Word.create(req.body);
    res.status(201).json({
      content: word,
      status: 'success',
    });
  } catch (error) {
    if (error.code === 11000) {
      next(new ErrorResponse('This word already exists', 400));
    }
  }
});

// @desc   Update word
// @route  PUT /api/v1/words
// @access Private
exports.updateWord = asyncHandler(async (req, res, next) => {
  let word = await Word.findById(req.body._id);
  if (!word) {
    return next(new ErrorResponse(`Word not found with id of ${req.params.id}`, 404));
  }

  word = await Word.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    content: word,
    status: 'success',
  });
});
