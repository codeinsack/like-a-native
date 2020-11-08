const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const AttachedWords = require('../models/AttachedWords');

// @desc   Attach word to user
// @route  POST /api/v1/attachedwords/:id
// @access Private
exports.attachWord = asyncHandler(async (req, res) => {
  const attachedWord = await AttachedWords.create({
    user: req.user.id,
    word: req.params.id,
  });
  res.status(200).json(attachedWord);
});

// @desc   Detach word
// @route  DELETE /api/v1/attachedwords/:id
// @access Private
exports.detachWord = asyncHandler(async (req, res, next) => {
  const attachedWord = await AttachedWords.findById(req.params.id);
  if (!attachedWord) {
    return next(new ErrorResponse(`No relationship with the id of ${req.params.id}`), 404);
  }
  await attachedWord.remove();
  res.status(200).json(null);
});

// @desc   Get words attached to user
// @route  GET /api/v1/attachedwords
// @access Private
exports.getAttachedWords = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});
