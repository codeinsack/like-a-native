const asyncHandler = require('../middleware/async');

const User = require('../models/User');

// @desc   Attach word to user
// @route  PUT /api/v1/users/:id/attachword
// @access Private
exports.attachWord = asyncHandler(async (req, res) => {
  const wordId = req.params.id;
  const userId = req.user.id;
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $push: { words: wordId } },
    { new: true, useFindAndModify: false },
  );
  res.status(200).json(updatedUser);
});

// @desc   Detach word
// @route  PUT /api/v1/users/:id/detachword
// @access Private
exports.detachWord = asyncHandler(async (req, res) => {
  const wordId = req.params.id;
  const userId = req.user.id;
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $pull: { words: wordId } },
    { new: true, useFindAndModify: false },
  );
  res.status(200).json(updatedUser);
});

// @desc   Get attached words
// @route  GET /api/v1/users/attachedwords
// @access Private
exports.getAttachedWords = asyncHandler(async (req, res) => {
  const { words } = await User.findById(req.user.id)
    .populate('attachedWords');
  res.status(200).json(words);
});
