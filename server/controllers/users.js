const asyncHandler = require('../middleware/async');

const User = require('../models/User');

// @desc   Assign word
// @route  PUT /api/v1/users/:id/assignword
// @access Private
exports.assignWord = asyncHandler(async (req, res) => {
  const wordId = req.params.id;
  const userId = req.user.id;
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $push: { words: wordId } },
    { new: true, useFindAndModify: false },
  );
  res.status(200).json(updatedUser);
});

// @desc   Get assigned words
// @route  GET /api/v1/users/assignedwords
// @access Private
exports.getAssignedWords = asyncHandler(async (req, res) => {
  const { words } = await User.findById(req.user.id)
    .populate('words');
  res.status(200).json(words);
});
