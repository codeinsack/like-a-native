const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Word = require('../models/Word');

// @desc   Get all words
// @route  GET /api/v1/words
// @access Public
exports.getWords = asyncHandler(async (req, res, next) => {
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
  res.status(200).json(word);
});

// @desc   Add new word
// @route  POST /api/v1/words
// @access Public
exports.addWord = asyncHandler(async (req, res, next) => {
  const word = await Word.create(req.body);
  res.status(201).json(word)
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

  res.status(200).json(word);
});

// @desc   Upload image for word
// @route  PUT /api/v1/words/:id/image
// @access Private
exports.wordImageUpload = asyncHandler(async (req, res, next) => {
  const word = await Word.findById(req.params.id);

  if (!word) {
    return next(new ErrorResponse(`Word not found with id of ${req.params.id}`, 400));
  }

  if (!req.files) {
    return next(new ErrorResponse('Please upload a file', 400));
  }

  const { file } = req.files;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse('Please upload an image file', 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  }

  // Create custom filename
  file.name = `image_${word._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.IMAGE_UPLOAD_PATH}/${file.name}`, async error => {
    if (error) {
      console.error(error);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Word.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json(file.name);
  });
});
