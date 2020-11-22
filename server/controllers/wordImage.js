const path = require('path');
const { v4: uuid } = require('uuid');
const asyncHandler = require('../middleware/async');
const WordImage = require('../models/WordImage');
const { bucket } = require('../server');
const ErrorResponse = require('../utils/errorResponse');

// @desc   Upload image for word
// @route  POST /api/v1/wordimage/:id
// @access Private
exports.uploadWordImage = asyncHandler(async (req, res, next) => {
  const { file } = req.files;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse('Please upload an image file', 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  }

  const imageId = uuid();
  const extension = path.extname(file.name);

  const fileName = `${req.params.id}/${imageId}${extension}`;
  const bucketFile = bucket.file(fileName);
  await bucketFile.save(file.data);

  await WordImage.create({
    word: req.params.id,
    name: `${imageId}${extension}`,
    size: file.size,
  });

  res.status(200).json({
    status: 'success',
  });
});

// @desc   Get word image
// @route  GET /api/v1/words/:id/image
// @access Private
exports.getWordImage = asyncHandler(async (req, res) => {
  // const word = await Word.findById(req.params.id);
  //
  // res.status(200).json({
  //   status: 'success',
  // });
});
