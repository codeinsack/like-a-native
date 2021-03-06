const path = require('path');
const { v4: uuid } = require('uuid');

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Word = require('../models/Word');
const { bucket } = require('../server');

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

// @desc   Upload image for word
// @route  PUT /api/v1/words/:id/image
// @access Private
exports.uploadWordImage = asyncHandler(async (req, res, next) => {
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

  const name = `${uuid()}${path.extname(file.name)}`;
  const bucketFile = bucket.file(name);
  await bucketFile.save(file.data);

  const image = {
    name,
    size: file.size,
  };

  await Word.findByIdAndUpdate(req.params.id, { images: word.images.concat(image) });

  res.status(200).json({
    content: image,
    status: 'success',
  });
});

// @desc   Get word image
// @route  GET /api/v1/words/image/:id
// @access Private
exports.getWordImage = asyncHandler(async (req, res) => {
  const bucketFile = bucket.file(req.params.id);

  const readStream = bucketFile.createReadStream();

  res.setHeader('Content-Type', 'image/*');
  readStream.pipe(res);
});

// @desc   Get word image
// @route  DELETE /api/v1/words/:wordId/image/:imageName
// @access Private
exports.deleteWordImage = asyncHandler(async (req, res) => {
  const word = await Word.findById(req.params.wordId);
  await Word.findByIdAndUpdate(req.params.wordId, {
    images: word.images.filter((image) => image.name !== req.params.imageName),
  });
  const bucketFile = bucket.file(req.params.imageName);
  await bucketFile.delete();

  res.status(200).json({
    status: 'success',
  });
});
